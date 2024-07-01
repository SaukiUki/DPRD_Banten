import { NextResponse } from "next/server";

export async function GET(request) {
  // const headersList = headers()
  const apikey = "AIzaSyBieUxZ6S-EgXaV3VhE8o7A6GafxDJAv5M";
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

  const result = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&order=date&key=${apikey}`
  );

  if (result.ok) {
    return NextResponse.json({ data: result.json() }, { status: 200 });
  } else {
    return NextResponse.json({ data: "Failed" }, { status: 402 });
  }
}
