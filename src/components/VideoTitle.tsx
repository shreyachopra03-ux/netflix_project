type Props = {
    title: string;
    overview: string
}

const VideoTitle = ({ title, overview }:Props) => {

    return (
        <div className="px-6 md:px-24 w-screen aspect-video bg-linear-to-r from-black pt-[20%] absolute text-white">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-m w-1/4">{overview}</p>
            <div className="my-4 md:m-0">
            <button className="bg-white text-black py-1 md:py-4 px-2 md:px-12 text-lg hover:bg-white/80 rounded-lg">
                ▶️ Play
            </button>
            <button className="bg-gray-400 mx-2 hidden md:inline-block text-white p-4 px-10 text-lg hover:bg-gray-400/80 rounded-lg">
                More Info
            </button>
            </div>
        </div>
    )
}

export default VideoTitle;