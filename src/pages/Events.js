import React from 'react'
import { motion } from 'framer-motion'
import EventsCard from '../components/EventsCard'

import daystogo from 'public/daystogo.png'
import cellmiraclecatch from 'public/cellmiraclecatch.jpg'

const Events = () => {
  return (
    <div id="events" className="flex flex-col gap-4 items-center justify-center pt-32">
        <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "fadeIn",
                delay: 0.9,
                duration: 1
            }}
            viewport={{ once: true }}
            className="text-3xl font-bold">
            Events
        </motion.h1>
        <motion.div
            className="flex flex-row justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "fadeIn",
                delay: 0.5,
                duration: 1
            }}
            viewport={{ once: true }}
        >
            <EventsCard title="4 Days to go" description="Our much awaited Harvest Event of the Year!" imgsrc={daystogo}/>
            <EventsCard title="Cell Miracle Catch" description="Our much awaited Harvest Event of the Year!" imgsrc={cellmiraclecatch}/>
        </motion.div>
    </div>
  )
}

export default Events