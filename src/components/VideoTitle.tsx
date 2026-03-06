const VideoTitle = ({title, overview}) => {
    
    return (
        <div className="pt-36 px-12">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-m w-1/4">{overview}</p>
            <div className="">
            <button className="bg-gray-400 text-white p-4 px-10 text-m bg-opacity-50 rounded-lg">
                ▶️ Play
            </button>
            <button className="bg-gray-400 mx-2 text-white p-4 px-10 text-m bg-opacity-50 rounded-lg">
                More Info
            </button>
            </div>
        </div>
    )
}

export default VideoTitle;