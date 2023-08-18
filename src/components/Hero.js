"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image  from 'next/image'
import front from 'public/front.png'

import AnimatedHeading from './AnimatedHeading';

const Hero = () => {
  return (
    <div>
        <div className="flex flex-row gap-4 py-20 px-56 mx-auto">
            <motion.div
            className="flex flex-col gap-10"
            >
            
            <motion.h1 
                className='text-6xl font-bold leading-tight'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                type: "tween",
                duration: 1,
                delay: 0.3,
                }}
            >
                <AnimatedHeading headingText="VERSE"/>
                <AnimatedHeading headingText="OF THE DAY"/>
            </motion.h1>
            <motion.div className="border-black border-2"
                initial={{ opacity: 0, x: -50}}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                type: 'tween',
                duration: 1.4,
                delay: 0.9,
                }}
            ></motion.div>
            <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                type: "fadeIn",
                duration: 1,
                delay: 0.8,
                }}
            >
                <h2 className="font-bold text-xl">Genesis 8:22</h2>
                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "fadeIn",
                    duration: 1,
                    delay: 1.4,
                }}
                className="text-lg text-justify w-full max-w-screen-sm"
                >
                    “As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.”
                </motion.p>
            </motion.div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'fadeIn',
                duration: 1,
                delay: 0.4,
            }}
            >
            <Image src={front} alt="Cell Miracle Catch Poster" className="" width={512} height={512}/>
            </motion.div>
        </div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            type: 'fadeIn',
            duration: 1,
            delay: 1.3,
            }}
            className="border-2 border-black mx-56"/>
    </div>
  )
}

export default Hero