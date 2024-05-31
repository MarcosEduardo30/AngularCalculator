import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestResultsService } from '../shared/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() IniInves?: string;
  @Input() AnnualInves?: string;
  @Input() ExpReturn?: string;
  @Input() Duration?: string;

  constructor(private investResultService: InvestResultsService){}


  onCalculateClick(){
    if(this.IniInves && this.AnnualInves && this.ExpReturn && this.Duration){
      this.investResultService.calculateInvestmentResults(+this.IniInves, +this.AnnualInves, +this.ExpReturn, +this.Duration)
    }
    else{
      console.log('Aí não né parça')
    }
    
  }
}
