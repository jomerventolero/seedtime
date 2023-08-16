import React from 'react'
import Image from 'next/image'

const EventsCard = ({title, description, imgsrc}) => {
  return (
    <div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-2">
            <Image className="w-full h-[400px] object-cover rounded" src={imgsrc} alt="Days to go"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default EventsCard