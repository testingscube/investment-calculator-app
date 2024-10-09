import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResultService } from './investment-results/investment-result.service';
import { type UserInput } from './user-input/user-input.model';
import { type InvestmentResult } from './investment-results/investment-result/investment-result.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-calculator-app';
  investmentResults: InvestmentResult[] = [];
  isReportGenerated: boolean = false;
  constructor(private investmentResultService: InvestmentResultService) {}

  onGenerateReport(userInput: UserInput) {
    this.investmentResults =
      this.investmentResultService.generateInvestmentSchedule(userInput);
      this.isReportGenerated = true;
      console.log("Button Pressed From User Reached App "+this.isReportGenerated);
  }
}
