"use client";
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Image  from 'next/image'
import front from 'public\\front.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-2">
      <Navbar />
      <div className="flex flex-row gap-4 py-10 px-56 mx-auto">
        <motion.div
          
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
            VERSE<br/> OF THE DAY
          </motion.h1>
          <motion.div
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "fadeIn",
              duration: 1,
              delay: 0.8,
            }}
          >
            <h2 className="font-bold text-xl">Genesis 8:22</h2>
            <p className="text-lg text-justify w-full max-w-screen-sm">
            “As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.”
            </p>
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

    </main>
  )
}
