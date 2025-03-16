import Link from '@/node_modules/next/link'
import React from 'react'


const Header = () => {
  return (
    <div>
      <div className="">
        <div className="pt-[220px] pl-[200px] flex flex-col justify-center gap-7">
            <h2 className="text-[40px] border-l font-bold">Hi There!</h2>
            <h1 className="text-7xl font-bold">I'M <span className='text-amber-500 '>NGAH DILAND</span></h1>
            <h3 className=" bg-amber-500 text-[20px]">Softwere/Civil Engeeneer</h3>
            <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui cupiditate alias blanditiis atque aliquid accusantium, culpa voluptates esse voluptatum harum officiis, natus eius quo ipsam fuga vel! Vitae, debitis.</p>
            <Link href="/about">
              <button className="w-[250px] text-white text-2xl h-[40px] bg-amber-500 rounded-2xl">
                MORE ABOUT ME.
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
