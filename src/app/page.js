"use client";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../pages/Events'
import AnimatedComponent from '@/components/AnimatedComponent';
import FBLiveStream from '@/components/FBLiveStream';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-2 py-20">
      <Navbar />
      <AnimatedComponent />
      <Hero />
      <Events />
      <FBLiveStream />
    </main>
  )
}
