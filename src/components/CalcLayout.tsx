"use client";
import React, { useState } from "react";

function CalcLayout() {
  const [invest, setInvest] = useState("");
  const [rate, setRate] = useState("");
  const [rreturn, setReturn] = useState("");
  return (
    <div className="w-70% h-full bg-red-700">
      <div className="grid gap-4 grid-cols-2">
        <div className="1">
          <div className="flex flex-col">
            <div className="grid grid-cols-2">
              <label htmlFor="invest">Monthly Investment</label>
              <input
                className="w-10 "
                type="text"
                id="nub"
                value={invest}
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
            <div className="grid grid-cols-2">
              <label htmlFor="invest">Monthly Investment</label>
              <input
                className="w-10"
                type="text"
                id="nub"
                value={invest}
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
            <div className="grid grid-cols-2 items-end">
              <label htmlFor="invest">Monthly Investment</label>
              <input
                className="w-10 "
                type="text"
                id="nub"
                value={invest}
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
        </div>
        <div className="2">world</div>
      </div>
    </div>
  );
}

export default CalcLayout;
