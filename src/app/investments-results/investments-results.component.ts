import { Component} from '@angular/core';
import { InvestResultsService } from '../shared/investment-results.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {
  constructor(public investResultService: InvestResultsService){}
}
