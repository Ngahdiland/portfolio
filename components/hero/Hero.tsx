import Image from '@/node_modules/next/image'
import profile from "../../public/assets/pro.png"
import React from 'react'
import Link from '@/node_modules/next/link'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between w-1/4 bg-amber-500 shadow-2xl shadow-gray-900'>
        <div className="">
            <Image src={profile} alt='' className='bg-gray-500' />
        </div>
        <div className="flex flex-col justify-between items-center gap-7 text-[20px] font-bold mb-[150px]">
            <Link href="/"> 
                Home
            </Link>
            <Link href="/about">
                About Me
            </Link>
            <Link href="/resume">
                Resume
            </Link>
            <Link href="/portfolio">
                Portfolio
            </Link>
            <Link href="/contact">
                Contact
            </Link>   
        </div>
      
    </div>
  )
}

export default Hero
