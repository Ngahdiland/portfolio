import React from 'react'
import Image from "@/node_modules/next/image";
import home from "../../public/assets/home-outline.svg";
import person from "../../public/assets/person-add.svg";
import portfolio from "../../public/assets/globe-outline.svg";
import resume from "../../public/assets/folder-open-outline.svg"
import contact from "../../public/assets/support_img.png"
import Link from "@/node_modules/next/link";

const TopHead = () => {
  return (
    <div className='flex justify-between'>
      <div className="flex justify-between-[30px] mt gap-[20px] fixed ">
        <Link href="/">
          <Image src={home} className='w-[50px] hover:bg-gray-500' alt="" />
        </Link>
        <Link href="/about">
          <Image src={person} className='w-[50px] hover:bg-gray-500' alt="" />
        </Link>
        <Link href="/portfolio">
          <Image src={portfolio} className='w-[50px] hover:bg-gray-500' alt="" />
        </Link>
        <Link href="/resume">
          <Image src={resume} className='w-[50px] hover:bg-gray-500' alt="" />
        </Link>
        <Link href="/contact">
          <Image src={contact} className='w-[50px] hover:bg-gray-500' alt="" />
        </Link>
      </div>
    </div>
  )
}

export default TopHead
