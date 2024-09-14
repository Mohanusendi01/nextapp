function calculateSIP(monthlyInvestment: number, annualInterestRate: number, durationInYears: number): number {
    const monthlyRate = annualInterestRate / 12 / 100;  // Convert annual rate to monthly and percentage to decimal
    const totalMonths = durationInYears * 12;

    // Formula for SIP future value
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);

    return futureValue;
}

// Example usage:
const monthlyInvestment = 5000;  // ₹5000 per month
const annualInterestRate = 12;   // 12% annual interest rate
const durationInYears = 10;      // Duration of 10 years

const futureValue = calculateSIP(monthlyInvestment, annualInterestRate, durationInYears);
console.log(`Future Value of the SIP: ₹${futureValue.toFixed(2)}`);
