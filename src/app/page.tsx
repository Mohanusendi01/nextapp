import Image from "next/image";
import Services from "@/components/Services";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem]" >
      
     <div className="services grid gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 xl:grid-rows-4 2xl:grid-rows-5 lg:grid-rows-3 sm:grid-row-2 m-10">
      <div className="service--1 p-3"> <Services/></div>
      <div className="service--2 p-3"> <Services/></div>
      <div className="service--3 p-3"> <Services/></div>
      <div className="service--4 p-3"> <Services/></div>
      <div className="service--5 p-3"> <Services/></div>
     </div>
    </div>
  );
}
