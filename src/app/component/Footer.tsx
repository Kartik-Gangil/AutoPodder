import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white/10 mt-25 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
                <div >
                    <div className='flex flex-col md:flex-row text-center md:text-left items-center gap-3 mb-5 '>
                        <Image alt='logo' height={70} width={70} src="/logo.png" />
                        <div>
                            <h1 className='text-2xl font-bold'>AutoPodder</h1>
                            <h2 className='text-sm text-gray-400 text-balance'>AI-Powered Podcast Generator</h2>
                        </div>
                    </div>
                    <h1 className='text-4xl font-bold italic text-balance text-center md:text-left'>Turn <span className='text-orange-500'>Thoughts</span> into Powerful <span className='text-orange-500'>Voices</span>.</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                        <h1 className='text-xl text-gray-300'>powered by :</h1>
                        <Link href='https://creovate-io.vercel.app/' target='_blank' className='flex flex-col md:flex-row items-center'>
                            <Image src="/Creovate.png" alt='company-logo' height={70} width={70} />
                            <h1 className='text-lg md:text-3xl font-bold italic text-shadow-lg text-shadow-gray-800'>CREOVATEIO</h1>
                        </Link>
                    </div>
                </div>

            </div>
            <hr className='pb-5 text-gray-600' />
            <p className='text-gray-400 text-xs text-center md:text-left md:text-sm px-5 pb-3 text-balance'> © 2024 AutoPodder. All rights reserved.</p>
        </footer>
    )
}

export default Footer
