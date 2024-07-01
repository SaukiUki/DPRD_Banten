import { prisma } from "@/utils/prismaclient";
import { NextResponse } from "next/server";

export async function GET(request) {
  // const headersList = headers()
  const id = parseInt(request.nextUrl.searchParams.get("id")) || 0;

  const data = await prisma.berita.findUnique({
    where: { id },
  });
  if (data) {
    return NextResponse.json({ data }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed" }, { status: 402 });
  }
}
