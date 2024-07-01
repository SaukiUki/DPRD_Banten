"use client";

import React from "react";
import { HiViewGrid } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { BiSolidPaperPlane } from "react-icons/bi";
import { PiBellLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbBooks } from "react-icons/tb";
import { TbHammer } from "react-icons/tb";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { MdOutlineMapsHomeWork, MdOutlineMenu } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export default function Header() {
  const pathname = usePathname();
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const menus = [
    { lab: "Home", href: "/", icon: <GoHome /> },
    { lab: "News", href: "/news", icon: <HiOutlineNewspaper /> },
    { lab: "Profil", href: "/profil", icon: <RiUserLine /> },
    { lab: "DPRD", href: "/dprd", icon: <HiOutlineBuildingLibrary /> },
    { lab: "Aspirasi", href: "/aspirasi", icon: <HiOutlineSpeakerphone /> },
    { lab: "Pokir", href: "/pokir", icon: <TbBooks /> },
    { lab: "JDIH", href: "/jdih", icon: <TbHammer /> },
    { lab: "PPID", href: "/ppid", icon: <IoMailOpenOutline /> },
    { lab: "Agenda", href: "/agenda", icon: <LuCalendarCheck2 /> },
    { lab: "Foto", href: "/foto", icon: <GrGallery /> },
    { lab: "Sekwan", href: "/sekwan", icon: <MdOutlineMapsHomeWork /> },
    // { lab: "BPTV", href: "/bptv", icon: <BiVideoRecording /> },
  ];
  return (
    <>
      <div className=" bg-deep-purple-900 md:py-14 py-8">
        <div className=" hidden md:block max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 ">
              <HiViewGrid className="text-white text-[47px]" />
              <h1 className=" text-white text-[39px] font-bold">
                DPRD PROVINSI BANTEN
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <a className=" bg-red-500 text-white text-[14px] px-2 py-1 font-semibold rounded-md hover:cursor-pointer hover:bg-red-700 flex items-center">
                <BiSolidPaperPlane className="text-[18px] pr-1" /> Lapor<i>!</i>
              </a>
              <button className=" text-white text-[15px] px-2 rounded-md hover:cursor-pointer">
                LOGIN
              </button>
              <CiLock className="text-white text-[33px] hover:cursor-pointer" />
              <hr className="w-[1px] h-5 bg-white" />
              <PiBellLight className="text-white text-[33px] hover:cursor-pointer" />
              <hr className="w-[1px] h-5 bg-white" />
              <IoSearchOutline className="text-white text-[33px] hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-2 md:max-w-screen-xl bg-white flex md:mx-auto p-2 md:p-4 -mt-12 border rounded-2xl shadow-md items-center justify-between md:justify-normal">
        <Image
          src="/assets/images/logo-dprd.png"
          width={55}
          height={55}
          alt="Logo DPRD Banten"
          className=""
        />
        <div className=" hidden md:block mx-4">
          <div className="flex gap-2 items-baseline border-b border-slate-300
          ">
            {menus.map((e) => (
              <div
                key={e.lab}
                className={`${
                  pathname === e.href ? " border-b-2 border-red-500" : ""
                } flex gap-2 pb-2`}
              >
                <Link
                  href={e.href}
                  className={`${
                    pathname === e.href ? "font-bold" : ""
                  } hover:cursor-pointer flex items-center gap-1`}
                >
                  {e.icon}
                  {e.lab}
                </Link>
                <hr className="w-[1px] h-5 bg-gray-300" />
              </div>
            ))}

            <div
              className={`${
                pathname === "/bptv" ? " border-b-2 border-red-500" : ""
              } flex gap-3 pb-2`}
            >
              <Link
                href="/bptv"
                className={`${
                  pathname === "/bptv" ? "font-bold" : ""
                } hover:cursor-pointer text-white bg-red-500 flex items-center gap-1 px-2 rounded-md`}
              >
                <BiVideoRecording />
                BPTV
              </Link>
            </div>
          </div>
          <div className="flex gap-5 text-[16px]">
            <p className="font-bold text-red-700 ">POPULAR!</p>
            <p className="font-semibold ">
              Pemprov Banten Raih Opini Wajar Tanpa Pengecualian Ke-8 Kali
            </p>
          </div>
        </div>
        <IconButton className=" md:hidden" variant="text" size="sm" onClick={openDrawerRight}>
          <MdOutlineMenu className=" text-2xl" />
        </IconButton>
      </div>
      <Drawer
        placement="left"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            DPRD Prov. Banten
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-3 w-full items-baseline">
          {menus.map((e) => (
            <div
              key={e.lab}
              className={`${
                pathname === e.href ? " border-l-4 border-red-500" : "border-l-4 border-transparent"
              } flex pl-2`}
            >
              <Link
                href={e.href}
                className={`${
                  pathname === e.href ? "font-bold" : ""
                } hover:cursor-pointer flex items-center gap-1`}
              >
                {e.icon}
                {e.lab}
              </Link>
            </div>
          ))}

          <div
            className={`${
              pathname === "/bptv" ? " border-b-2 border-red-500" : ""
            } flex pl-2`}
          >
            <Link
              href="/bptv"
              className={`${
                pathname === "/bptv" ? "font-bold" : ""
              } hover:cursor-pointer text-white bg-red-500 flex items-center gap-1 px-2 rounded-md`}
            >
              <BiVideoRecording />
              BPTV
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}
