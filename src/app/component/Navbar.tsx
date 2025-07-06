'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // for hamburger icons
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 h-20 w-full z-50'>
            <div className='flex items-center justify-between px-5 py-2 bg-white/20 backdrop-blur-sm border-b border-white/10 shadow-lg'>
                {/* Logo + Title */}
                <div className='flex items-center gap-3'>
                    <Image src="/logo.png" height={70} width={70} alt="logo" />
                    <div className='text-left'>
                        <h1 className='text-2xl font-bold'>AutoPodder</h1>
                        <p className='text-sm'>AI-Powered Podcast Generator</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <ul className='hidden md:flex gap-5'>
                    <li className='p-2 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer'>
                        <Link href='#features'>Features</Link>
                    </li>
                    <li className='p-2 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer'>
                        About
                    </li>
                    <li className='bg-gradient-to-r from-orange-500 to-orange-700 p-2 px-3 rounded-lg cursor-pointer hover:from-orange-700 hover:to-orange-800 transition-all duration-500 text-white' onClick={() => router.push('/Dashboard')}>
                        Get Started
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden bg-black/80 backdrop-blur-sm px-5 pb-5 pt-3'>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='p-2 border-b border-white/20'>
                            <Link href='#features' onClick={() => setMenuOpen(false)}>Features</Link>
                        </li>
                        <li className='p-2 border-b border-white/20'>
                            <button onClick={() => setMenuOpen(false)}>About</button>
                        </li>
                        <li className='bg-gradient-to-r from-orange-500 to-orange-700 p-2 px-3 rounded-lg text-center'>
                            <button onClick={() => {
                                setMenuOpen(false)
                                router.push('/Dashboard')
                            }}>Get Started</button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
