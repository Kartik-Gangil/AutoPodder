'use client'

import { CircleCheckBig, Headphones, TrendingUp, Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'


const Demo: React.FC = () => {

    interface Points {
        sentence: string
    }[]
    const points: Points[] = [
        { sentence: "Generate engaging scripts with AI" },
        { sentence: "Choose from premium voice options" },
        { sentence: "Customize tone and pacing" },
        { sentence: "Export in multiple formats" }
    ]
    const [isPlaying, setIsPlaying] = useState<boolean>(false)


    const audioRef = useRef<HTMLAudioElement | null>(null)


    const handlePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/deepgram-aura-2-apollo-en.mp3')
        }

        if (!isPlaying) {
            audioRef.current.play()
            setIsPlaying(true)
        } else {
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }


    return (
        <section id='demo' className="px-5 mt-35 scroll-mt-30">
            <div className='bg-white/10 p-5 md:p-15 rounded-2xl'>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div>
                        <h1 className='font-bold mb-4 text-xl md:text-3xl'>See AutoPodder in Action</h1>
                        <h2 className='mb-4 text-sm md:text-lg '>Watch how easy it is to create professional podcasts with our AI-powered platform. From script generation to final audio export in just a few clicks.</h2>
                        <ul>
                            {points.map((point, index) => {
                                return (<li key={index} className='flex items-center text-xs md:text-sm gap-2 mt-4 mb-4'> <CircleCheckBig className='text-green-700' /> <span>{point.sentence}</span> </li>)
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className='bg-orange-800/20 rounded-2xl p-3 h-full w-full'>
                            <div className='bg-orange-300/10 p-2 md:p-5 rounded-2xl'>
                                <div className='flex items-center gap-2'>
                                    <Headphones className='p-2 rounded-xl bg-orange-600 h-10 w-10' />
                                    <div>
                                        <h2 className='font-bold text-balance'>Episode: "Future of AI"</h2>
                                        <h3 className='font-thin text-gray-500 text-balance'>Generated in 2 minutes</h3>
                                    </div>
                                </div>
                                {!isPlaying ? (<button onClick={handlePlay} className='bg-gradient-to-r from-orange-400 to-orange-600 flex gap-2 items-center justify-center cursor-pointer rounded-2xl p-3 w-full mt-2
                                hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 transition-all duration-500'> <Play /> <span>Play Preview</span></button>) :
                                    (<button onClick={handlePlay} className='bg-gradient-to-r from-orange-400 to-orange-600 flex gap-2 items-center justify-center cursor-pointer rounded-2xl p-3 w-full mt-2
                                hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-800 transition-all duration-500'> <Pause /> <span>Stop Preview</span></button>)}
                            </div>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <TrendingUp size={40} className='text-orange-600' />
                                <h1>95% Quality Score</h1>
                                <p className='font-thin text-sm'>Studio-grade audio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Demo
