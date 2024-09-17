// utils/sipCalculator.ts
export function calculateSIP(monthlyInvestment: number, annualInterestRate: number, durationInYears: number): number {
    const monthlyRate = annualInterestRate / 12 / 100;  // Convert annual rate to monthly decimal
    const totalMonths = durationInYears * 12;
  
    // Formula for SIP future value
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    const invest = monthlyInvestment * durationInYears;
    const rrturn = futureValue - invest
  
    return {futureValue,invest,rrturn};
  }
  