import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { scrollTo } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="px-8 w-full">
      <Wrapper>
        <div className="w-full flex justify-between items-center">
          {/* logo */}
          <Link href={"/"} className="flex items-center">
            <div className="relative w-[300px] h-[100px] ">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                className="object-contain"
                fill
              />
            </div>
            {/* logo end*/}
            <span className="bg-white/70 w-[2px] h-[50px] rounded-full" />
            <div className="relative w-[50px] h-[50px] ml-3">
              <Image
                src={"/assets/logo2.jpg"}
                alt="X"
                fill
                className="object-cover bg-[#B81D21]"
              />
            </div>
          </Link>
          {/* navbar actions */}
          <div className="flex gap-x-14 text-white items-center font-semibold text-xl tracking-widest">
           
            <div onClick={()=>scrollTo("herobanner")} className="cursor-pointer">
              <div>Home</div>
            </div>
            <div onClick={()=>scrollTo("speakers")} className="cursor-pointer">
              <div>Speakers</div>
            </div>
            <div onClick={()=>scrollTo("About")} className="cursor-pointer">
              <div>About Us</div>
            </div>
            <div onClick={()=>scrollTo("Contact")} className="cursor-pointer">
              <div>Contact Us</div>
            </div>
            <Link href="/login">
            <div>
              <div className="cursor-pointer">Login/Signup</div>
            </div>
            </Link>
        
            <a
              href=""
              className=" relative border-2 py-2 px-4 tracking-widest  uppercase border-[#B81D21]
               text-[#B81D21] before:transition-all before:duration-500 transition-all before:absolute
                before:top-0 before:left-0 before:w-0 before:h-full hover:before:w-full
                 hover:before:bg-[#b81d21]/[0.5]
                 hover:text-white"
            >
              <div>Get Tickets</div>
            </a>

            {/* navbar actions end */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
