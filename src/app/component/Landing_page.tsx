import { ArrowRight, Sparkles, Play } from 'lucide-react'


const Landing_page:React.FC = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-5 mt-25 py-15 ">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="border rounded-full md:py-2 md:px-5  py-1 px-3 text-balance text-center items-center flex gap-2 bg-white/20 backdrop-blur-md  border-white/20 shadow-lg"> <Sparkles size={20} className='text-amber-500' /> <span> Powered by Advanced AI Technology</span></h3>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight text-pretty text-white">
                        Create Amazing <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700'> Podcasts</span> with AI
                    </h1>
                    <p className='text-center text-xl text-balance mt-3 text-gray-400'>
                        Transform your ideas into professional podcasts in minutes. Generate scripts, choose AI voices, and produce studio-quality content without any technical expertise.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center mt-10 gap-5'>
                        <button className='py-5 px-10 rounded-2xl text-xl font-bold justify-center flex gap-2 items-center bg-gradient-to-r from-orange-400 to-orange-700 backdrop-blur-md'><span>Start Creating Free</span><ArrowRight /></button>
                        <button className='py-5 px-10 rounded-2xl justify-center border flex gap-2 items-center border-white bg-white/10 backdrop-blur-md'> <Play /><span>Watch Demo</span></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing_page
