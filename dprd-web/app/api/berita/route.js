import { prisma } from "@/utils/prismaclient";
import { NextResponse } from "next/server";
import path from "path";
import { existsSync } from "fs";
import { writeFile, unlink } from "fs/promises";

export async function POST(req) {
  const formData = await req.formData();

  const file = formData.get("file");
  const title = formData.get("title");
  const content = formData.get("content");

  let img = "";
  if (file  && file != "undefined") {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = "IMG-" + Date.now() + file.name.replaceAll(" ", "_");
    img = "/assets/berita/" + filename;

    await writeFile(
      path.join(process.cwd(), "public/assets/berita/" + filename),
      buffer
    );
  }
  const result = await prisma.berita.create({
    data: { img, title, content },
  });

  if (result) {
    return NextResponse.json({ data: "Success Add Data" }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed Add Data" }, { status: 402 });
  }
}

export async function PATCH(request) {
  const id = parseInt(request.nextUrl.searchParams.get("id"));
  const formData = await request.formData();

  const file = formData.get("file");
  const title = formData.get("title");
  const content = formData.get("content");

  let img = "";
  let result = null;

  const detail = await prisma.berita.findUnique({
    where: {
      id,
    },
  });

  if (!detail)
    return NextResponse.json({ data: "Data Not Found" }, { status: 404 });

  if (file  && file != "undefined") {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = "IMG-" + Date.now() + file.name.replaceAll(" ", "_");
    img = "/assets/berita/" + filename;

    await writeFile(
      path.join(process.cwd(), "public/assets/berita/" + filename),
      buffer
    );

    result = await prisma.berita.update({
      where: { id },
      data: { img, title, content },
    });

    if (result && existsSync("public" + detail.img))
      await unlink("public" + detail.img);
  } else {
    result = await prisma.berita.update({
      where: { id },
      data: { title, content },
    });
  }

  if (result) {
    return NextResponse.json({ data: "Success Add Data" }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed Add Data" }, { status: 402 });
  }
}

export async function DELETE(request) {
  const id = parseInt(request.nextUrl.searchParams.get("id"));

  const detail = await prisma.berita.findUnique({
    where: {
      id,
    },
  });

  if (!detail)
    return NextResponse.json({ data: "Data Not Found" }, { status: 404 });

  const result = await prisma.berita.delete({
    where: {
      id,
    },
  });

  if (result) {
    if (existsSync("public" + detail.img)) {
      await unlink("public" + detail.img);
    }
    return NextResponse.json({ data: "Success delete Data" }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed delete Data" }, { status: 402 });
  }
}

export async function GET(request) {
  // const headersList = headers()
  const page = parseInt(request.nextUrl.searchParams.get("page")) || 0;
  const limit = 10;
  const title = request.nextUrl.searchParams.get("title") || "";
  let offset = limit * page;

  let searchV = title
    ? {
        title: {
          contains: title,
        },
      }
    : null;

  const totalRows = await prisma.berita.count({
    where: { ...searchV },
  });
  const totalPage = Math.ceil(totalRows / limit);
  const result = await prisma.berita.findMany({
    skip: offset,
    take: limit,
    where: { ...searchV },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  const data = {
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  };
  if (data) {
    return NextResponse.json({ data }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed" }, { status: 402 });
  }
}
