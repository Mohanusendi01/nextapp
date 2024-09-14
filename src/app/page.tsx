import Image from "next/image";
import Services from "@/components/Services";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem]" >
      <HeroSection/>
     <div className="services grid gap-4 grid-cols-4 grid-rows-3 m-10">
      <div className="service--1 p-3"> <Services/></div>
      <div className="service--2 p-3"> <Services/></div>
      <div className="service--3 p-3"> <Services/></div>
      <div className="service--4 p-3"> <Services/></div>
      <div className="service--5 p-3"> <Services/></div>
     </div>
     
      
    </div>
  );
}
