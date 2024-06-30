import React from 'react'
import logo from '../../assets/plant.logo.png'
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className='bg-[#A9A9A9] text-black p-20 flex justify-between'>
            <div>
                <div>
                    <div className='flex gap-2 items-center text-3xl font-medium'>
                        <img src={logo} className='w-8 h-8' />
                        GreenSwap
                    </div>
                    <p className='my-3'>Plant delivery made simple and quick!</p>
                </div>
                <div className='mt-16 flex gap-4 text-2xl'>
                    <IoLogoInstagram />
                    <FaFacebook />
                    <RiTwitterXLine />
                </div>
            </div>
            <div>
                <p>Need assistance?</p>
                <p className='text-xl mb-12'>Our team is ready to help you</p>
                <div className='flex items-center gap-2 font-medium text-2xl'>
                    <FaPhoneAlt />
                    <span>(+ 91) 8989898989</span>
                </div>
                <div className='mt-2 flex items-center gap-2 font-medium text-2xl'>
                    <IoMail />
                    <span className='mb-1'>support@greenswap.com</span>
                </div>
            </div>
        </footer>
    )
}
