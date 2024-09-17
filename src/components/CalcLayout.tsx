// pages/index.tsx
"use client";
import React, { useState } from "react";
import {
  calculateSIP,
  calculateInvest,
  calculateReturn,
} from "@/app/utils/Sipcalculator";
import Pichart from "./Pichart";

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000); // Default value ₹5000
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(12); // Default value 12%
  const [durationInYears, setDurationInYears] = useState<number>(10); // Default value 10 years
  const [futureValue, setFutureValue] = useState<number | null>(null);
  const [invest, setInvest] = useState<number | null>(null);
  const [rrturn, setReturn] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ///let {x,y,z} = calculateSIP(monthlyInvestment, annualInterestRate, durationInYears);
    const result = calculateSIP(
      monthlyInvestment,
      annualInterestRate,
      durationInYears
    );
    const invest = calculateInvest(monthlyInvestment, durationInYears);
    const rreturn = calculateReturn(
      monthlyInvestment,
      annualInterestRate,
      durationInYears
    );
    setFutureValue(result);
    setInvest(invest);
    setReturn(rreturn);
  };

  return (
    <div className="w-3/5 h-3/5 text-center bg-white p-4 shadow-2xl	">
      <h1 className="text-black">SIP Calculator</h1>
      <div className="grid grid-cols-2">
        <form onChange={handleSubmit}>
          <div className="grid grid-row-3 gap-3">
            <div className="flex justify-center flex-col text-black ">
              <div className="mt-6">
                <div className="flex justify-between">
                  <label htmlFor="monthlyInvestment">Monthly Investment</label>
                  <input
                    className="w-24 p-3 bg-sky-100 text-sky-600 h-8 text-end border-sky-600"
                    id="monthlyInvestment"
                    type="text"
                    value={`₹${monthlyInvestment}`}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    required
                  />
                </div>
                <input
                  className="w-full"
                  type="range"
                  min={500}
                  max={1000000}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                />
              </div>
              <div className="mt-6">
                <div className="flex justify-between">
                  <label htmlFor="annualInterestRate">
                    Annual Interest Rate
                  </label>
                  <input
                    className=" w-24 p-3 bg-sky-100 text-sky-600 h-8 text-end border-sky-600"
                    id="annualInterestRate"
                    type="text"
                    value={`${annualInterestRate}%`}
                    onChange={(e) =>
                      setAnnualInterestRate(Number(e.target.value))
                    }
                    required
                  />
                </div>
                <input
                  className="w-full"
                  type="range"
                  min={1}
                  max={30}
                  onChange={(e) =>
                    setAnnualInterestRate(Number(e.target.value))
                  }
                />
              </div>
              <div className="mt-6">
                <div className="flex justify-between">
                  <label htmlFor="durationInYears">Duration </label>
                  <input
                    className="w-24 p-3 bg-sky-100 text-sky-600 border-sky-600 h-8 text-end"
                    id="durationInYears"
                    type="text"
                    value={`${durationInYears}Yr`}
                    onChange={(e) => setDurationInYears(Number(e.target.value))}
                    required
                  />
                </div>
                <input
                  className="w-full"
                  type="range"
                  min={1}
                  max={40}
                  onChange={(e) => setDurationInYears(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="text-black mt-5">
              <div className="flex justify-between">
                <p>Invested Amount</p>
                <p>{invest !== null && <h2> ₹{invest.toFixed(2)}</h2>}</p>
              </div>
              <div className="flex justify-between">
                <p>Est. Returns</p>
                <p>{rrturn !== null && <h2> ₹{rrturn.toFixed(2)}</h2>}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Value</p>
                <p>
                  
                  {futureValue !== null && <h2> ₹{futureValue.toFixed(2)}</h2>}
                </p>
              </div>
            </div>
          </div>
        </form>
        <div>
          <Pichart invest={Number(invest)}/>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
