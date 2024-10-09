import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResultService } from './investment-results/investment-result.service';
import { type UserInput } from './user-input/user-input.model';
import { type InvestmentResult } from './investment-results/investment-result.model';
import { CommonModule } from '@angular/common';
import { signalSetFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-calculator-app';

  // investmentResults?: InvestmentResult[];
  investmentResults = signal<InvestmentResult[] | undefined>(undefined);
  constructor(private investmentResultService: InvestmentResultService) {}

  onGenerateReport(userInput: UserInput) {
    // this.investmentResults =
    //   this.investmentResultService.generateInvestmentSchedule(userInput);
    this.investmentResults.set(this.investmentResultService.generateInvestmentSchedule(userInput));
    console.log(this.investmentResults);
    }
}
