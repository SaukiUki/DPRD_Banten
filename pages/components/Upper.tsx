import React from 'react'
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
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";

function Upper() {
    return (
        <div>
            <div className='h-[200px] bg-neutral-800'>
                <div className=' max-w-screen-lg mx-auto flex justify-between'>
                    <div className='mt-10'>
                        <div className='flex items-center gap-4 mt-5'>
                            <HiViewGrid className='text-white text-[47px]' />
                            <h1 className=' text-white text-[39px] font-bold'>DPRD PROVINSI BANTEN</h1>
                        </div>
                    </div>
                    <div className=" mt-16 flex items-center gap-2">
                        <a className=' bg-red-500 text-white text-[14px] px-2 py-1 font-semibold rounded-md hover:cursor-pointer hover:bg-red-700 flex items-center'><BiSolidPaperPlane className='text-[18px] pr-1' /> Lapor<i>!</i></a>
                        <button className=' text-white text-[15px] px-2 rounded-md hover:cursor-pointer'>LOGIN</button>
                        <CiLock className='text-white text-[33px] hover:cursor-pointer' />
                        <hr className='w-[1px] h-5 bg-white' />
                        <PiBellLight className='text-white text-[33px] hover:cursor-pointer' />
                        <hr className='w-[1px] h-5 bg-white' />
                        <IoSearchOutline className='text-white text-[33px] hover:cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className=' bg-white max-w-screen-lg flex mx-auto h-[100px] -mt-12 border rounded-2xl shadow-md items-center'>
                <div>
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiI50KnlhbkT3P3JgZ1K8B4MBBhe_xu4l66nD02zFKnWza8FwaqqMPxBeUaP92ASVBZEHxyM79BhYlmdB6YiF4Sjrqs3EdF_3hTmiOzuC6SENyO_BIlxAiK1WloHMhgt-FFHTIl5iN20-NHKur4BVqWTGUuTEaKgId46HcVuwr6z_Omzuc_OTNoxEIn/s600/DPRD-Provinsi-Banten.png" width={55} height={55} alt="Logo DPRD Banten" className='mx-4' />
                </div>
                <div className='mx-4'>
                    <div className='flex gap-1 items-center text-[15px]'>
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><GoHome className='text-[17px]'/>HOME</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><HiOutlineNewspaper className='text-[17px]'/>NEWS</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><RiUserLine className='text-[17px]' /> PROFIL</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><HiOutlineBuildingLibrary className='text-[17px]'/>DPRD</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><HiOutlineSpeakerphone className='text-[17px]'/>ASPIRASI</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><TbBooks className='text-[17px]'/>POKIR</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><TbHammer className='text-[17px]'/>JDIH</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><IoMailOpenOutline className='text-[17px]'/>PPID</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><LuCalendarCheck2 className='text-[17px]'/>AGENDA</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><GrGallery className='text-[17px]'/>FOTO</a>
                        <hr className='w-[1px] h-5 bg-slate-300' />
                        <a className='font-bold hover:cursor-pointer flex items-center gap-1'><MdOutlineMapsHomeWork className='text-[17px]'/>SEKWAN</a>
                        <a className='bg-red-500 font-bold text-white px-2 rounded-md hover:cursor-pointer hover:bg-red-700 flex items-center gap-1'><BiVideoRecording className='text-[17px]'/>BPTV</a>
                    </div>
                    <hr className='my-2' />
                    <div className='flex gap-5 text-[16px]'>
                        <p className='font-bold text-red-700 '>POPULAR!</p>
                        <p className='font-semibold '>Pemprov Banten Raih Opini Wajar Tanpa Pengecualian Ke-8 Kali</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upper
