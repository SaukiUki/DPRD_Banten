import moment from "moment";
import Image from "next/image";
import React from "react";

export default function CardNewsVer({ item }) {
  return (
    <div>
      <div className="relative w-full h-[130px] rounded-t-lg">
        <Image
          fill
          objectFit="cover"
          src={item?._embedded?.["wp:featuredmedia"][0]?.source_url}
          alt="card-image"
          className=" rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-b-lg p-3">
        <p className=" leading-5 pb-1 font-medium  line-clamp-3">
          {item.title?.rendered}
        </p>
        <div className=" flex text-[11px] items-center text-slate-800">
          <p className=" ">Admin - {moment(item.date).format("DD MMM YYYY")}</p>
        </div>
      </div>
    </div>
  );
}
