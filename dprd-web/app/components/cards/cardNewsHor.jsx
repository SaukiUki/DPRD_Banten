import moment from "moment";
import Image from "next/image";
import React from "react";

export default function CardNewsHor({ item }) {
  return (
    <div className=" flex gap-3">
      <div className=" w-1/3 h-40 relative">
        <Image
          fill
          objectFit="cover"
          src={item?._embedded?.["wp:featuredmedia"][0]?.source_url}
          alt="card-image"
          className=" rounded-lg"
        />
      </div>
      <div className=" w-2/3">
        <div className=" flex items-center text-[15px] gap-2 font-bold ">
          <p>NEWS</p>
          <hr className=" bg-gray-400 w-[1px] h-3" />
          <p>{item._embedded?.["wp:term"][0][0]?.name}</p>
        </div>
        <div className=" leading-none">
          <p className=" text-[18px] line-clamp-2 font-semibold pt-2">
            {item.title?.rendered}
          </p>
          <div
            className=" pt-2 text-xs text-slate-600 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: item.content?.rendered }}
          ></div>
        </div>
        <div className=" flex items-center text-[11px] gap-2 pt-2">
          <p>ADMIN</p>
          <hr className=" bg-slate-400 w-[1px] h-3" />
          <p>{moment(item?.date).format("DD MMM YYYY")}</p>
        </div>
      </div>
    </div>
  );
}
