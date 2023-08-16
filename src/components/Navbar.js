"use client";
import React from 'react'
import logo from 'public/logo.png'
import brandfb from 'public/brand-facebook.png'
import Image from 'next/image';
import { ImMenu } from 'react-icons/im';
import { useState } from 'react';


const Navbar = () => {
  const menu = useState(false);

  const handleClick = () => {
    menu.current = !menu.current;

  }

  return (
    <section className="" id="navbar">
        <nav className="fixed top-0 flex flex-row gap-4 mx-auto p-4 justify-between w-full bg-white z-30">
            <div>
                <a
                    href="/"
                    className="text-4xl font-bold cursor-pointer"
                >
                    <Image src={logo} alt="logo" height={50}/>
                </a>
            </div>
            <div className="flex flex-row items-center justify-center">
                <a href="https://facebook.com/SHCIFAMILY">
                    <Image src={brandfb} alt="brand-fb" />
                </a>
                <ImMenu className="cursor-pointer w-[64px] h-[32px]" onClick={handleClick}/>
                {menu.current && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50">
                        Opened
                    </div>
                )} 
            </div>

        </nav>
    </section>
  )
}

export default Navbar