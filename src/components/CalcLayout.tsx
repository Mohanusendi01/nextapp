"use client";
import React, { useState } from "react";
import Pichart from "./Pichart";

function CalcLayout() {
  const [invest, setInvest] = useState("");
  const [rate, setRate] = useState("");
  const [rreturn, setReturn] = useState("");
  return (
    <div className="w-4/5 h-4/5 bg-red-700 p-4 ">
      <div className="grid gap-4 grid-cols-2 h-full ">
        <div className="1">
          <div className=" grid grid-rows-2 gap-4 h-full">
          <div className="flex flex-col justify-evenly  h-full">
            <div className="flex justify-between ">
              <label htmlFor="invest ">Monthly Investment</label>
              <input
                className="w-10 justify-self-end text-black text-center"
                type="text"
                id="nub"
                value={`${invest}`}
                onChange={(e) => setInvest(e.target.value)}
              />
            </div>
            <input
              type="range"
              id="invest"
              name="invest"
              min="0"
              max="11"
              onChange={(e) => setInvest(e.target.value)}
            />
            <div className="flex justify-between">
              <label htmlFor="invest">Monthly Investment</label>
              <input
                className="w-10 justify-self-end text-black text-center"
                type="text"
                id="nub"
                value={`${invest}%`}
                onChange={(e) => setInvest(e.target.value)}
              />
            </div>
            <input
              type="range"
              id="invest"
              name="invest"
              min="0"
              max="11"
              onChange={(e) => setInvest(e.target.value)}
            />
            <div className="flex justify-between">
              <label htmlFor="invest place-items-start">Monthly Investment</label>
              <input
                className="w-10 justify-self-end  text-black text-center"
                type="text"
                id="nub"
                value={`${invest}Yr`}
                onChange={(e) => setInvest(e.target.value)}
              />
            </div>
            <input
              type="range"
              id="invest"
              name="invest"
              min="0"
              max="11"
              onChange={(e) => setInvest(e.target.value)}
            />
          </div>
          <div className='mt-6'>
            <div className="flex justify-between">
            <p className="1">Invested Amount</p>
            <p>01</p>
            </div>
            <div className="flex justify-between"><p className="2">Est. Returns </p>
            <p>02</p></div>
           <div className="flex justify-between"> 
            <p className="3">Total Value</p>
            <p>03</p></div>
          </div>
          </div>
        </div>
        <div className="2">
          <Pichart/>
        </div>
      </div>
    </div>
  );
}

export default CalcLayout;
