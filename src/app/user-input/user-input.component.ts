import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  onCalculateClick(){
  }
}
