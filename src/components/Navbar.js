"use client";
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <section className="min-w-screen" id="navbar">
        <nav className="flex flex-col gap-4 mx-auto justify-start justify-items-start">
            <motion.div
                className="text-4xl font-bold cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    type: 'fadeIn',
                    duration: 1,
                    delay: 0.2
                }}
            >
                SHCI
            </motion.div>
        </nav>
    </section>
  )
}

export default Navbar