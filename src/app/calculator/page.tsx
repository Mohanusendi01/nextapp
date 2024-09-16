import React from "react";
import CalcLayout from "@/components/CalcLayout";

function calculatorPage() {
  return (
    <div className="absolute inset-0 h-full w-full flex justify-center items-center bg-orange-300 ">
      <CalcLayout />
    </div>
  );
}

export default calculatorPage;
