import React from "react";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
import Card from "./Card";
import Image from "next/image";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className="h-screen ">
      <Wrapper className={"h-full"}>
        <UpperDesign heading={"Contact Us"} />
        <div className="pt-16 px-10">
          <div className="flex items-center gap-x-24 justify-center">
            <Card
              title={"Lead Organizer"}
              name={"Murtaza Lashari"}
              email={"lashari.murtaza1@gmail.com"}
              number={"+92-321-1242710"}
              src={"/assets/d2.jpg"}
            />
            <Card
              title={"DIRECTOR CORPORATE"}
              name={"Sufiyan Arshad"}
              email={"Sufiyanarshad08@gmail.com"}
              number={"+92-305-2740966"}
              src={"/assets/d3.jpg"}
            />
            <Card
              title={"PUBLIC RELATIONS"}
              name={"Javeria Hameed"}
              email={"javeriahameed06@gmail.com"}
              number={"+92-333-3795017"}
              src={"/assets/dummyimage.jpg"}
            />
          </div>
        </div>
        {/* footer */}
        <Footer/> 
      </Wrapper>
    </div>
  );
};

export default Contact;
