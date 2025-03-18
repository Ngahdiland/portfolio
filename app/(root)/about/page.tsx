import React from "react";
import Image from "@/node_modules/next/image";
import temp from "../../../public/assets/globe-outline.svg"
import "./style.css"

const About = () => {
  return (
    <div className="flex flex-col gap-9 w-3/4 mt-[80px] mx-[50px]">
      <div className="about flex h-[160px] border-2 border-gray-900  justify-center items-center ">
        <h1 className="text-9xl font-bold">ABOUT ME</h1>
      </div>
      <div className="flex flex-col">
        <h2 className="  text-2xl font-bold">
          I'm <span className="text-amber-500 ">NGAH DILAND</span>,
          Software/civil Engineer
        </h2>
        <p className=" pt-5 text-1.5xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          possimus provident odio rem libero porro quidem nihil numquam delectus
          aliquam eos sed quas quam perspiciatis, exercitationem pariatur atque
          voluptas inventore distinctio quaerat obcaecati quae. Enim.
        </p>
      </div>
      <div className="black-side flex justify-between gap-6">
        <div className="black-div w-2/3 h-[400px] text-amber-50 pt-5 bg-gray-900 mb-[50px]">
          <div className=" block-one flex justify-center items-center w-[90%] mx-auto my-auto">
            <div className="col-1 w-1/2 h-[180px] flex justify-center items-center flex-col border-b-2 border-amber-50">
              <h1 className="text-6xl">3 +</h1>
              <h3 className="text-3xl">Years Expirience</h3>
            </div>
            <div className="col-1 w-1/2 h-[180px] flex justify-center items-center flex-col border-l-2 border-b-2 border-amber-50">
              <h1 className="text-6xl">30 +</h1>
              <h3 className="text-3xl">Projects Done</h3>
            </div>
          </div>
          <div className=" block-one flex justify-center items-center w-[90%] mx-auto my-auto">
            <div className="col-1 w-1/2 h-[180px] flex justify-center items-center flex-col border-amber-50">
              <h1 className="text-6xl">10 +</h1>
              <h3 className="text-3xl">Happy Clients</h3>
            </div>
            <div className="col-1 noBorder w-1/2 h-[180px] flex justify-center items-center flex-col border-l-2 border-amber-50">
              <h1 className="text-6xl">1.2K +</h1>
              <h3 className="text-3xl">Followers</h3>
            </div>
          </div>
        </div>
        <div className="iDo w-1/3">
          <h1 className="text-3xl font-bold pb-7">What I Do?</h1>
          <div className="borderYes flex gap-6 justify-between">
            <div className="">
              <Image src={temp} className='img' alt=''/>
            </div>
            <div className="">
              <h3>WEB Development</h3>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem numquam veniam repudiandae quae voluptas consectetur rem iusto</p>
            </div>
          </div>
          <div className="borderYes flex gap-6 justify-between">
            <div className="">
              <Image src={temp} className='img' alt=''/>
            </div>
            <div className="">
              <h3>WEB Development</h3>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem numquam veniam repudiandae quae voluptas consectetur rem iusto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
