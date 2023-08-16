"use client";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../pages/Events'
import { useScroll, motion } from 'framer-motion';


export default function Home() {
  const scrollYProgress = useScroll();
  return (
    <main className="flex min-h-screen flex-col m-2 py-20">
      <motion.div className="progress-bar z-10" style={{ scaleX: scrollYProgress }}></motion.div>
      <Navbar />
      <Hero />
      <Events />
    </main>
  )
}
