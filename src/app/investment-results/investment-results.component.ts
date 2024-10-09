import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { type InvestmentResult } from './investment-result/investment-result.model';
import { type UserInput } from '../user-input/user-input.model';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [InvestmentResultComponent, NgFor],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) investmentResults!: InvestmentResult[];

  hasInvestmentReport(): boolean {
    console.log("Button Pressed From User Reached App To Results");
    return this.investmentResults.length === 0 ? false : true;
  }
}
