import React from 'react'

const FBLiveStream = () => {
  return (
    <div className="flex flex-row justify-center items-center px-56 py-10">
        
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSHCIFAMILY%2Fposts%2Fpfbid0qXf5VAzF1wsjUnjPTEXm2MvXBLaMSto2B3js6jSA7HAbfUaAms7q6A76B1g2A88al&show_text=true&width=500" width="800" height="550" className="rounded-2xl overflow-hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <div className="flex flex-col self-start">
            <h1 className="text-2xl text-right font-bold mx-auto my-2 self-start">Seedtime Harvest Live Stream Service</h1>
            <div className="border-black border-2 ml-2"></div>
        </div>
    </div>
  )
}

export default FBLiveStream