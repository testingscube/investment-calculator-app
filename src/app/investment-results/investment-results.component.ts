import { Component, Input, input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { type InvestmentResult } from './investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  @Input({ required: true }) investmentResults?: InvestmentResult[];

  hasInvestmentReport(): boolean {
    if (this.investmentResults)
      return true;
    else return false;
  }
}
