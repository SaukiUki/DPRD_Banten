import React from "react";
import { SlArrowRight } from "react-icons/sl";

export default function CardPokirHome() {
  return (
    <div className=" w-full p-3 border rounded-xl ">
      <div className="flex justify-between items-center ">
        <div className=" flex items-center gap-2 ">
          <div>
            <p className=" w-9 h-9 bg-blue-200 rounded-full"></p>
          </div>
          <div className=" leading-none">
            <p className=" font-bold text-[15px]">Dr. Havid Anshari</p>
            <p className=" text-[10px]">Anggota Komisi I - Fraksi Gerindra</p>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <div className=" leading-none justify-center">
            <p className=" text-[25px] font-bold">26</p>
            <p className=" text-[10px]">Usulan</p>
          </div>
          <SlArrowRight className=" text-base font-semibold" />
        </div>
      </div>
    </div>
  );
}
