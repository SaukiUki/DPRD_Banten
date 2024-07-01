import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { SlCloudDownload } from "react-icons/sl";

export default function CardJDIH() {
  return (
    <div className=" w-full p-3 border rounded-xl ">
      <div className=" flex justify-between items-center ">
        <div className=" flex items-center gap-4 ">
          <div>
            <p className=" w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
              <BsFolder2Open className=" text-[17px]" />
            </p>
          </div>
          <div className=" ">
            <p className=" font-bold text-[13px]">Keputusan DPRD</p>
            <div className=" flex items-center gap-4">
              <p className=" text-[10px] flex items-center gap-1">
                <BsFileEarmarkRuled className="" />
                3234
              </p>
              <p className=" text-[10px] flex items-center gap-1">
                <IoEyeOutline className=" text-[12px]" />
                3234
              </p>
              <p className=" text-[10px] flex items-center gap-1">
                <SlCloudDownload className="" />
                2134
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="px-2 py-1  bg-purple-900 rounded-lg text-white text-[10px] flex items-center">
            DETAIL
          </button>
        </div>
      </div>
    </div>
  );
}
