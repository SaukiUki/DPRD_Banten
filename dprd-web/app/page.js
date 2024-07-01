import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/Footer";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import { TfiMap } from "react-icons/tfi";
import CardBptv from "./components/cards/cardBptv";
import { apikey } from "@/utils/constanta";
import moment from "moment";
import { HiArrowRight } from "react-icons/hi2";
import CardNewsHor from "./components/cards/cardNewsHor";
import CardNewsVer from "./components/cards/CardNewsVer";
import CardAgenda from "./components/cards/cardAgenda";
import CardPokirHome from "./components/cards/CardPokirHome";
import CardJDIH from "./components/cards/CardJDIH";

async function getVideo() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&order=date&channelId=UCh5qhHFMobE5XVbM22WtMQg&key=${apikey}`,
    { cache: "force-cache" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getBeritaHeadline() {
  const res = await fetch(
    `https://dprd-bantenprov.go.id/wp-json/wp/v2/posts?categories=30&per_page=1&_embed`,
    { cache: "force-cache" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getBerita() {
  const res = await fetch(
    `https://dprd-bantenprov.go.id/wp-json/wp/v2/posts?categories=62,31,32,33,34,35,30,53,60,5&_embed&per_page=10`,
    { cache: "force-cache" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const video = await getVideo();
  const headline = await getBeritaHeadline();
  const berita = await getBerita();
  return (
    <>
      <Header />
      <div className=" md:max-w-screen-xl md:mx-auto grid md:grid-cols-3 gap-4">
        <div className=" col-span-2">
          {/* top */}
          <div className={` relative w-full h-[400px] rounded-xl my-6`}>
            <Image
              src={
                headline &&
                headline[0]?._embedded?.["wp:featuredmedia"][0]?.source_url
              }
              fill
              objectFit="cover"
              className=" rounded-2xl"
            />
            <div className=" absolute from-gray-300 shadow-sm w-full h-full">
              <div className="  pt-[270px] mx-7">
                <div>
                  <div className=" flex gap-2 text-white text-[12px] ">
                    <p className=" bg-red-600 py-1 px-2 font-semibold rounded-md">
                      NEWS
                    </p>
                    <p className=" bg-purple-900 py-1 px-2 font-semibold rounded-md">
                      {headline &&
                        headline[0]?._embedded?.["wp:term"][0][0]?.name}
                    </p>
                  </div>
                  <div>
                    <h1 className=" my-3 text-white font-semibold leading-none text-[21px]">
                      {headline && headline[0]?.title?.rendered}
                    </h1>
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div className="text-white text-[12px] flex gap-3 items-center">
                    <a className=" px-2 bg-blue-800 rounded-md font-bold">#</a>
                    <p>Sekretariat DPRD Banten, Aspirasi Masyarakat</p>
                  </div>
                  <p className=" text-[12px] text-slate-400 ">
                    {headline &&
                      moment(headline[0].date).format(" DD MMM YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* / list bptv// */}

          <div className=" grid grid-cols-3 gap-3">
            {(video && (video?.items ?? [])).slice(0, 3).map((e) => (
              <CardBptv
                item={{
                  title: e.snippet.title,
                  img: e.snippet?.thumbnails?.medium?.url,
                  date:
                    moment(e.snippet?.publishTime).format("DD MMM YYYY") ?? "",
                }}
              />
            ))}
          </div>

          {/* /ads// */}

          <div className=" h-48 rounded-lg w-full my-4 bg-gray-300"></div>

          {/* berita */}

          <div className=" w-full p-4 rounded-2xl bg-gray-900 ">
            <div className="flex justify-between items-center">
              <div className=" text-3xl text-white">
                <strong>BERITA</strong> LAINNYA
              </div>
              <div className=" rounded-md px-3 bg-red-500 font-semibold text-white">
                ARSIP BERITA
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-3 mt-4">
              {(berita && berita.slice(0, 3)).map((e, i) => (
                <CardNewsVer key={`aaq${i}`} item={e} />
              ))}
            </div>
          </div>

          {/* / */}

          <div className=" flex flex-col gap-3 mt-4">
            {(berita && berita.slice(4, 7)).map((e, i) => (
              <CardNewsHor key={`nw${i}`} item={e} />
            ))}
          </div>
        </div>

        {/* sidebar */}
        <div>
          <div className=" h-[400px] w-full bg-gray-300 rounded-lg my-6"></div>
          <div>
            <div className=" items-center text-black font-bold flex gap-2">
              Agenda <HiArrowRight />
            </div>
            {<CardAgenda />}
          </div>
          <div className=" mt-4">
            <div className=" items-center text-black font-bold flex gap-2">
              e-Pokir <HiArrowRight />
            </div>
            {<CardPokirHome />}
          </div>
          <div className=" mt-4">
            <div className=" items-center text-black font-bold flex gap-2">
              Dokumentasi Hukum | JDIH
            </div>
            {<CardJDIH />}
          </div>
        </div>
      </div>


      <div className="w-full h-[280px] bg-teal-300">
        <div className=" max-w-screen-lg mx-auto">
          <div>
            <div className=" flex justify-between items-center">
              <div className=" text-white flex items-center gap-7 py-3">
                <p className=" font-bold text-[21px]">ASPIRASI PUBLIK</p>
                <div className="flex items-center gap-3 ">
                  <p className=" flex items-end gap-1">
                    <HiOutlineSpeakerphone className="text-[20px]" />
                    <b>234</b> Aduan
                  </p>
                  <hr className=" w-[1px] h-3 bg-white" />
                  <p>
                    <b>345</b> Aspirasi
                  </p>
                  <hr className=" w-[1px] h-3 bg-slate-400" />
                  <p>
                    <b>520</b> Pengirim
                  </p>
                </div>
              </div>
              <div>
                <a className=" py-1 px-3 bg-red-600 hover:bg-red-800 cursor-pointer font-semibold rounded-lg text-white text-[14px] flex items-center gap-1">
                  PLAZA ASPIRASI
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className=" flex gap-5 my-4">
              <div className=" w-[330px] h-[180px] bg-blue-gray-50 rounded-xl">
                <div className=" mx-4">
                  <div className="flex justify-between items-center  ">
                    <div className=" my-4 flex items-center gap-4 ">
                      <div>
                        <p className=" w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center">
                          <RiUserLine />
                        </p>
                      </div>
                      <div className=" ">
                        <p className=" font-bold text-[13px]">Abdul Karom</p>
                        <div className=" flex items-center gap-4">
                          <p className=" text-[10px] flex items-center gap-1">
                            Kamis, 04-11-2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="px-2 py-1 bg-green-400 rounded-xl text-white text-[10px] flex items-center">
                        {" "}
                        Dalam Antrian
                      </a>
                    </div>
                  </div>
                  <div className=" bg-white rounded-xl flex flex-col justify-center w-[295px] h-[90px]">
                    <div className=" text-[11px] font-bold px-5">
                      <div className="flex justify-between items-center gap-7">
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis, deleniti.
                        </p>
                        <SlArrowDown className=" text-[18px]" />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className=" text-slate-600 text-[9px] flex items-center gap-2 px-5">
                      <p className=" flex items-center gap-1">
                        <TfiMap className=" text-[10px]" />
                        Banten 2
                      </p>
                      <hr className=" w-[1px] bg-slate-200 h-3" />
                      <p className=" flex items-center gap-1">
                        <RiUserLine className=" text-[10px]" /> Komisi III Bid.
                        Keuangan dan Aset{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[330px] h-[180px] bg-blue-gray-50 rounded-xl">
                <div className=" mx-4">
                  <div className="flex justify-between items-center  ">
                    <div className=" my-4 flex items-center gap-4 ">
                      <div>
                        <p className=" w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center">
                          <RiUserLine />
                        </p>
                      </div>
                      <div className=" ">
                        <p className=" font-bold text-[13px]">Abdul Karom</p>
                        <div className=" flex items-center gap-4">
                          <p className=" text-[10px] flex items-center gap-1">
                            Kamis, 04-11-2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="px-2 py-1 bg-green-400 rounded-xl text-white text-[10px] flex items-center">
                        {" "}
                        Dalam Antrian
                      </a>
                    </div>
                  </div>
                  <div className=" bg-white rounded-xl flex flex-col justify-center w-[295px] h-[90px]">
                    <div className=" text-[11px] font-bold px-5">
                      <div className="flex justify-between items-center gap-7">
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis, deleniti.
                        </p>
                        <SlArrowDown className=" text-[18px]" />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className=" text-slate-600 text-[9px] flex items-center gap-2 px-5">
                      <p className=" flex items-center gap-1">
                        <TfiMap className=" text-[10px]" />
                        Banten 2
                      </p>
                      <hr className=" w-[1px] bg-slate-200 h-3" />
                      <p className=" flex items-center gap-1">
                        <RiUserLine className=" text-[10px]" /> Komisi III Bid.
                        Keuangan dan Aset{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[330px] h-[180px] bg-blue-gray-50 rounded-xl">
                <div className=" mx-4">
                  <div className="flex justify-between items-center  ">
                    <div className=" my-4 flex items-center gap-4 ">
                      <div>
                        <p className=" w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center">
                          <RiUserLine />
                        </p>
                      </div>
                      <div className=" ">
                        <p className=" font-bold text-[13px]">Abdul Karom</p>
                        <div className=" flex items-center gap-4">
                          <p className=" text-[10px] flex items-center gap-1">
                            Kamis, 04-11-2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="px-2 py-1 bg-green-400 rounded-xl text-white text-[10px] flex items-center">
                        {" "}
                        Dalam Antrian
                      </a>
                    </div>
                  </div>
                  <div className=" bg-white rounded-xl flex flex-col justify-center w-[295px] h-[90px]">
                    <div className=" text-[11px] font-bold px-5">
                      <div className="flex justify-between items-center gap-7">
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nobis, deleniti.
                        </p>
                        <SlArrowDown className=" text-[18px]" />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className=" text-slate-600 text-[9px] flex items-center gap-2 px-5">
                      <p className=" flex items-center gap-1">
                        <TfiMap className=" text-[10px]" />
                        Banten 2
                      </p>
                      <hr className=" w-[1px] bg-slate-200 h-3" />
                      <p className=" flex items-center gap-1">
                        <RiUserLine className=" text-[10px]" /> Komisi III Bid.
                        Keuangan dan Aset{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
