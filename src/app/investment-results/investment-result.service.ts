import { Injectable } from '@angular/core';
import { type UserInput } from '../user-input/user-input.model';
import { type InvestmentResult } from './investment-result/investment-result.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultService {
  
    generateInvestmentSchedule(userInput: UserInput): InvestmentResult[] {
    const schedule: InvestmentResult[] = [];
    const r = userInput.expectedReturn / 100;
    let totalInterest = 0;
    let investedCapital = userInput.initialAmount;

    for (let year = 1; year <= userInput.duration; year++) {
      // Calculate future value for the current year
      const interestPerYear = investedCapital * r;
      const investmentValue =
        investedCapital * Math.pow(1 + r, year) +
        userInput.annualInvestment * ((Math.pow(1 + r, year) - 1) / r);

      // Update total interest
      totalInterest += interestPerYear;

      // Update invested capital for the next iteration
      investedCapital += userInput.annualInvestment;

      // Push the result for this year
      schedule.push({
        investmentYear: year,
        investmentValue: investmentValue,
        interestPerYear: interestPerYear,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }

    return schedule;
  }
}
