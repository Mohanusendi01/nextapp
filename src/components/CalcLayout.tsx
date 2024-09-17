// pages/index.tsx
'use client'
import React, { useState } from 'react';
import { calculateSIP } from '@/app/utils/Sipcalculator';

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000); // Default value ₹5000
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(12); // Default value 12%
  const [durationInYears, setDurationInYears] = useState<number>(10); // Default value 10 years
  const [futureValue, setFutureValue] = useState<number | null>(null);
  const [invest, setInvest] = useState<number | null>(null);
  const [rrturn,setReturn] = useState<number | null>(null);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = calculateSIP(monthlyInvestment, annualInterestRate, durationInYears);
    setFutureValue(result);
  };

  return (
    <div className='w-3/5 h-3/5 text-center bg-slate-300 p-4'>
      <h1>SIP Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center flex-col '>
        <div className='flex justify-between'>
          <label htmlFor="monthlyInvestment">Monthly Investment (₹): </label>
          <input
           className='p-2'
            id="monthlyInvestment"
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            required
          />
        </div>
        <input type="range" min={0} max={100} onChange={(e)=> setMonthlyInvestment(Number(e.target.value))} />
        <div className='flex justify-between'>
          <label htmlFor="annualInterestRate">Annual Interest Rate (%): </label>
          <input
            id="annualInterestRate"
            type="number"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
            required
          />
        </div>
        <input type="range" min={0} max={100} onChange={(e)=> setAnnualInterestRate(Number(e.target.value))} />
        <div className='flex justify-between'>
          <label htmlFor="durationInYears">Duration (Years): </label>
          <input
            id="durationInYears"
            type="number"
            value={durationInYears}
            onChange={(e) => setDurationInYears(Number(e.target.value))}
            required
          />
        </div>
        <input type="range" min={0} max={100}  onChange={(e)=> setDurationInYears(Number(e.target.value))}/>
        </div>
       <div className='flex justify-between'>
       <p>Invested Amount</p>
       <p>01</p>
       </div>
       <div className='flex justify-between'>
       <p>Est. Returns</p>
       <p>01</p>
       </div>
       <div className='flex justify-between'>
       <p>Total Value</p>
       <p>{futureValue !== null && (
          <h2> ₹{futureValue.toFixed(2)}</h2>
      )}</p>
       </div>
        <button type="submit" style={{ marginTop: '20px' }}>Calculate</button>
      </form>

      {futureValue !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>Future Value of SIP: ₹{futureValue.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
