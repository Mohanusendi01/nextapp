'use client'
import React from "react";
import CalcLayout from "@/components/CalcLayout";

function calculatorPage() {
  return (
    <div className="absolute flex justify-center items-center -z-10 h-full w-full bg-orange-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
    
     <CalcLayout/>
    
    </div>
  );
}

export default calculatorPage;
