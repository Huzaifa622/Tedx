import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Speaker from "@/components/Speaker";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={cn("w-full bg-black", montserrat.className)}>
      <div id="home">
        <Navbar />
      </div>
      <div id="herobanner">
        <HeroBanner />
      </div>
      <div id="speakers">
        <Speaker />
      </div>
      <div id="introduction">
        <Introduction />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}
