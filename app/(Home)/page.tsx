import Image from "@/node_modules/next/image";
import React from "react";
import Profile from "../../public/assets/pro.png";


const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="">
        <Image className="" src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
