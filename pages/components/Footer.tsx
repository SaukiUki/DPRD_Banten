import React from 'react'
import Image from 'next/image'
import img from '../api/smartdprd.jpg'

function Footer() {
    return (
        <div className='w-full h-[520px] bg-black'>
            <div className='max-w-screen-lg h-full mx-auto pt-5'>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <p className='font-bold text-[18px] text-white '>GALERI FOTO/</p>
                        <p className='font-bold text-yellow-300'>FOTO TERPOPULER</p>
                        <p className='text-white text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eum quisquam animi!</p>
                    </div>
                </div>
                <div className='flex gap-3 justify-center mt-5'>
                    <div>
                        <img className=' bg-slate-200 py-[70px] px-24 rounded-lg' />
                        <p className='text-white leading-none pt-3 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, omnis.</p>
                        <div className='flex gap-1 text-[11px] items-center'>
                            <p className=' text-slate-400'>ADMIN</p>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <p className=' text-slate-400'>20 FEB 2023</p>
                        </div>
                    </div>
                    <div>
                        <img className=' bg-slate-200 py-[70px] px-24 rounded-lg' />
                        <p className='text-white leading-none pt-3 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, omnis.</p>
                        <div className='flex gap-1 text-[11px] items-center'>
                            <p className=' text-slate-400'>ADMIN</p>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <p className=' text-slate-400'>20 FEB 2023</p>
                        </div>
                    </div>
                    <div>
                        <img className=' bg-slate-200 py-[70px] px-24 rounded-lg' />
                        <p className='text-white leading-none pt-3 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, omnis.</p>
                        <div className='flex gap-1 text-[11px] items-center'>
                            <p className=' text-slate-400'>ADMIN</p>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <p className=' text-slate-400'>20 FEB 2023</p>
                        </div>
                    </div>
                    <div>
                        <img className=' bg-slate-200 py-[70px] px-24 rounded-lg' />
                        <p className='text-white leading-none pt-3 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, omnis.</p>
                        <div className='flex gap-1 text-[11px] items-center'>
                            <p className=' text-slate-400'>ADMIN</p>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <p className=' text-slate-400'>20 FEB 2023</p>
                        </div>
                    </div>
                    <div>
                        <img className=' bg-slate-200 py-[70px] px-24 rounded-lg' />
                        <p className='text-white leading-none pt-3 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, omnis.</p>
                        <div className='flex gap-1 text-[11px] items-center'>
                            <p className=' text-slate-400'>ADMIN</p>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <p className=' text-slate-400'>20 FEB 2023</p>
                        </div>
                    </div>
                </div>
                <hr className='bg-slate-400 my-8' />
                <div className=' flex justify-between'>
                    <div><Image src={img} width={340} height={150} alt=''/></div>
                    <div>
                        <div className='flex items-center gap-2 py-1 text-[14px] text-white'>
                            <a className=' font-bold hover:cursor-pointer'>DPR RI</a>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <a className=' font-bold hover:cursor-pointer'>LPSE PROV. BANTEN</a>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <a className=' font-bold hover:cursor-pointer'>KPUD PROV. BANTEN</a>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <a className=' font-bold hover:cursor-pointer'>PEMDA BANTEN</a>
                            <hr className='w-[1px] bg-slate-400 h-3' />
                            <a className=' font-bold hover:cursor-pointer'>PPID UTAMA</a>
                        </div>
                        <hr className='my-2 bg-slate-600' />
                        <div className='flex justify-between items-center text-white text-[14px]'>
                            <div className=''>
                                <a>Copyright 2023 - DPRD PROVINSI BANTEN</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <a>Download App</a>
                                <hr className='w-[1px] bg-slate-400 h-3' />
                                <a>Help Center</a>
                                <hr className='w-[1px] bg-slate-400 h-3' />
                                <a>FaQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

