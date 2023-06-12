/* eslint-disable no-unused-vars */
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
// import {FaLocationDot} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="footer" className="fixed bottom-0">
      <div className="bg-amber-200 w-screen">
        <div className="flex items-center justify-between gap-3 p-4 px-7">
          <div className="bg-emerald-800  h-[35px] w-[35px] rounded-full flex items-center justify-center ">
            <h1 className="text-[30px] font-bold font-nunito uppercase">srv</h1>
          </div>
          <div className="flex  text-2xl text-emerald-900">
            <IoLogoWhatsapp />
            <AiFillInstagram className="mx-3" />
            <BsFacebook />
          </div>
          <div className="">
            <span className="inline-block">
              <MdLocationOn className=""/>
            </span>
            <span>
              malang <br /> indonesia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
