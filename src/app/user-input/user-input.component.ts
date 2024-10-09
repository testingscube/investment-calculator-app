import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput: UserInput = {
    initialAmount: 0,
    duration: 0,
    annualInvestment: 0,
    expectedReturn: 0,
  };
  @Output() generateReport = new EventEmitter<UserInput>();
  investmentCalculator() {
    console.log("Button Pressed From User");
    this.generateReport.emit(this.userInput);
  }
}
