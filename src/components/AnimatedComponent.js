import React from 'react'
import { motion } from 'framer-motion'
import Image  from 'next/image'


import center from 'public/center.png'
import background from 'public/2.png'

const AnimatedComponent = () => {
  return (
    <div className="flex justify-center items-center self-center py-10 px-20">
        
        <Image className="z-0" src={background} alt="background" />
        <Image className="absolute" src={center} alt="center" />
        
        <motion.h1 
            initial={{ opacity: 0, y: -50}}
            whileInView={{ opacity: 1, y: 0, x: -250}}
            transition={{
                type: "fadeIn",
                duration: 1,
                delay: 0.1
            }}
            viewport={{ once: true }}
            className="text-[100px] font-bold absolute text-white translate-y-60 -translate-x-60 space-x-2 drop-shadow-2xl shadow-black">G O I N G
        </motion.h1>
        <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 250 }}
            transition={{
                type: "fadeIn",
                duration: 1,
                delay: 0.1
            }}
            viewport={{ once: true }}
            className="text-[100px] font-bold absolute text-white translate-y-60 translate-x-60 space-x-2 drop-shadow-2xl shadow-black">H O M E
        </motion.h1>
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 60}}
            transition={{
                type: "fadeIn",
                duration: 1,
                delay: 0.1
            }}
            viewport={{ once: true }}
            className="text-4xl font-semibold absolute translate-y-60 drop-shadow-2xl shadow-black text-white"
        >
            YOUR FAITH JOURNEY DOESN'T HAVE TO BE ALONE
        </motion.h1>
    </div>
  )
}

export default AnimatedComponent