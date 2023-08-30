import React from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import UpperDesign from "./UpperDesign";

const Introduction = () => {
  return (
    <div className="relative overflow-hidden h-screen max-h-[1280px]">
      <Wrapper>
        <UpperDesign heading={"What is Tedx Smiu"} />
        <div className="w-full flex gap-x-14">
          <div className="relative w-[50%] aspect-square overflow-hidden ">
            <Image
              src={"/assets/xlogo.jpg"}
              fill
              alt="image"
              className="opacity-40 object-cover"
            />
          </div>
          <div
            className="text-white aspect-square w-[50%] 
          "
          >
            <div
              className="flex flex-col
            py-40 px-6 gap-y-4  font-medium text-justify hyphens-auto"
            >
              <p className="text-xl">
                Welcome to TEDx SMIU, an independently organized TED event
                hosted by Sindh Madressatul Islam University (SMIU) where ideas
                worth spreading come to life! Join us for an inspiring day
                filled with thought-provoking talks, interactive discussions,
                and an opportunity to connect with like-minded individuals.
              </p>
              <p className="text-xl py-6 ">
                TEDx SMIU aims to bring together a diverse group of speakers
                from various disciplines, each with a unique perspective and
                groundbreaking ideas. The talks will cover a wide range of
                topics, including technology, education, science, arts, social
                issues, and more. This event is an excellent opportunity to gain
                insights, ignite your curiosity, and be part of a community that
                fosters change.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduction;
