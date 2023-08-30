import React from "react";
import Wrapper from "./Wrapper";


const HeroBanner = () => {
  const TargetWithNames = () => {
    return (
      <div className="flex flex-col items-center w-full justify-center h-[80%] uppercase">
        <h1 className="text-[88px] font-bold tracking-wide " id="explore">
          Exploring
        </h1>
        <h1
          className="text-[80px] font-bold line-height tracking-wide"
          id="dream"
        >
          Dreams
        </h1>
      </div>
    );
  };
  return (
    <Wrapper>
      <div
        className="relative w-full z-[90] overflow-hidden bg-center bg-cover bg-no-repeat text-white 
        md:aspect-[2.63/1] lg:aspect-[2.5/1]"
        style={{
          backgroundImage: "url(/assets/land2.jpg)",
        }}
      >
        <div className="w-full h-full bg-[#B81D21]/[0.4] ">
          <TargetWithNames />
          <div className="w-full h-full flex flex-col items-center py-2">
            <h3 className="text-[25px] font-normal">
              13<sup>th</sup> September 2023
            </h3>
            <h3 className="text-[25px] font-bold ">SMIU Karachi</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroBanner;
