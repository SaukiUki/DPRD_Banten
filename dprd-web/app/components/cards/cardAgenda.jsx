import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";

export default function CardAgenda() {
  return (
    <div className=" my-4 w-full shadow-md h-[115px] border rounded-lg ">
      <div className=" my-2 mx-3">
        <div className=" h-[20px] flex justify-between items-center">
          <div className=" text-[10px] flex items-center gap-2 ">
            <LuAlarmClock className="text-[14px]" />
            <p>14.00 - 16.00</p>
            <hr className=" w-[2px] h-2 bg-green-100" />
            <p className=" font-bold text-[11px] text-green-700">SEGERA</p>
          </div>
          <div className=" bg-green-100 text-[9px] px-2 py-1 text-green-700 rounded-lg">
            <p className=" font-bold flex items-center gap-1">
              CHECK IN
              <FaCirclePlus />
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-1 text-[11px] font-semibold my-1">
          <p className=" text-slate-700 line-clamp-2">
            Rapat Paripurna Penyampaian Hasil Reses Pimpinan dan Anggota DPRD
            Prov. Banten serta Pandangan Fraksi DPRD dadadsa dsadsa
          </p>
          <p className=" text-[9px] text-slate-500 flex items-center gap-1">
            <GrLocationPin />
            Ruang Rapat Komisi 2
          </p>
          <hr />
          <div className=" flex text-slate-700 text-[9px] gap-5">
            <p className=" flex items-center gap-1 ">
              <RiUserLine className=" text-[10px]" />
              Komisi 1
            </p>
            <p className=" flex items-center gap-1">
              <MdOutlineLocalOffer />
              Komisi 1, DR. Ali Yusuf, dan 6 lainnya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
