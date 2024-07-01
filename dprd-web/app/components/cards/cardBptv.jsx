import Image from "next/image";
import React from "react";
import { BiVideoRecording } from "react-icons/bi";

export default function CardBptv({ item }) {
  return (
    <div className="">
      <div className=" relative w-full h-[140px] rounded-lg">
        <Image fill objectFit="cover" className=" rounded-lg" src={item.img} />
        <div className=" absolute bottom-3 left-3 flex w-fit bg-purple-900 gap-1 font-semibold p-1 text-white text-[9px] rounded-md hover:cursor-pointer flexml-4">
          <BiVideoRecording className=" text-sm" />
          BPTV
        </div>
      </div>
      <p className=" my-2 leading-5 font-medium  line-clamp-2">{item.title}</p>
      <div className=" flex text-xs items-center text-gray-600">
        <p className=" ">Admin - {item.date ?? ""}</p>
      </div>
    </div>
  );
}
