import React from "react";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen w-full overflow-hidden text-white max-h-[1280px]">
      <Wrapper className={"h-full"}>
        <UpperDesign heading={"About SMIU"} />
        <div className=" relative w-full h-full flex pl-24 ">
          <div className=" w-[68%] flex flex-col gap-y-4 text-xl font-semibold  z-[80] px-5 text-justify py-32 hyphens-auto">
            <p className="text-white">
              Sindh Madressatul Islam University is a chartered University, duly
              recognized by the Higher Education Commission of Pakistan. It is
              one of the oldest institutions in South Asia. The Founder of
              Pakistan, Quaid-e-Azam Mohammad Ali Jinnah, studied at this
              institution for about four and a half years from 1887-92.
            </p>
            <p className="text-white">
              Its campus is located in the commercial hub of Karachi, near I.I.
              Chundrigar Road (old McLeod Road) in vicinity of Habib Bank Plaza
              and MCB Tower. It is spread over more than eight acres of land and
              comprises some of the most beautiful colonial era buildings
              designed by architect James Strachan in 1880.
            </p>
            <p className="text-white">Sindh Madressatul Islam University offers four year undergraduate programs and two year master's degrees, however doesn't award doctorate's. As of 2013, this university has 16 faculty members with PhD degrees teaching there. The university is constructing a 15-floor academic tower in its current campus</p>
          </div>

          <div className="absolute right-0 text-black w-[547px] h-[450px] bottom-24 overflow-hidden">
            <Image
              fill
              src={"/assets/smiuclock.jpg"}
              alt="smiu"
              className="object-cover object-center opacity-70"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
