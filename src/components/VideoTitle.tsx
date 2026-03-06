type Props = {
    title: string;
    overview: string
}

const VideoTitle = ({ title, overview }:Props) => {

    return (
        <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 absolute text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-m w-1/4">{overview}</p>
            <div className="">
            <button className="bg-white text-black p-4 px-12 text-lg hover:bg-white/80 rounded-lg">
                ▶️ Play
            </button>
            <button className="bg-gray-400 mx-2 text-white p-4 px-10 text-lg hover:bg-gray-400/80 rounded-lg">
                More Info
            </button>
            </div>
        </div>
    )
}

export default VideoTitle;