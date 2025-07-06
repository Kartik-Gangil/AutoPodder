'use client'
import { useRouter } from 'next/navigation'
const Trial: React.FC = () => {
    const router = useRouter()
    return (
        <div className="bg-orange-600/10 mx-5 p-5 mt-30 text-center rounded-2xl">
            <h1 className=" text-2xl md:text-5xl font-bold text-balance ">Get your <span onClick={()=>router.push('/Dashboard')} className='text-orange-500 italic hover:text-orange-400 hover:text-shadow-xl duration-500 transition-all cursor-pointer'>FREE TRIAL</span> now.</h1>
        </div>
    )
}

export default Trial
