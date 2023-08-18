"use client";
import React, { useState } from 'react';
import logo from 'public/logo.png';
import brandfb from 'public/brand-facebook.png';
import Image from 'next/image';

import AnimatedHeading from './AnimatedHeading';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <section id="navbar">
        <nav className="border-b-black border-b-[1px] fixed top-0 flex flex-row gap-4 mx-auto p-4 justify-between w-full bg-white z-30">
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
                
                {isMenuOpen ? <AiOutlineClose className={`cursor-pointer w-[64px] h-[32px]`} onClick={toggleMenu}/> : <BiMenuAltRight className={`cursor-pointer w-[64px] h-[32px]`} onClick={toggleMenu}/>
                }
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                            type: "fadeIn",
                            duration: 1,
                            delay: 0.1
                        }}
                        className="absolute top-0 right-0 mt-16 mr-4 w-40 p-2 bg-white border-[1px] border-black shadow rounded-xl">
                        <ul className="space-y-2">
                            <li><a href="#"><AnimatedHeading headingText="ABOUT"/></a></li>
                            <div className="border-[1px] border-black" />
                            <li><a href="#"><AnimatedHeading headingText="CONTACT"/></a></li>
                            <div className="border-[1px] border-black" />
                            <li><a href="#events"><AnimatedHeading headingText="EVENTS"/></a></li>
                            <div className="border-[1px] border-black" />
                            <li><a href="#watch"><AnimatedHeading headingText="WATCH"/></a></li>
                            {/* Add more menu items as needed */}
                        </ul>
                    </motion.div>
                )} 
            </div>
        </nav>
    </section>
  )
}

export default Navbar;
