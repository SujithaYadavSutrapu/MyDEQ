import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { Router } from '@angular/router';
@Component({
  selector: 'app-crushing-index',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './crushing-index.component.html',
  styleUrl: './crushing-index.component.css'
})
export class CrushingIndexComponent {
  sections: { name: string }[] = [];
   constructor(private router: Router) { }

   ngOnInit(): void {
    this.sections = [
      { name: 'Permit Location'},
      { name: 'Rule 316 Dust Control Plan/operation'},
      { name: 'Your Hours of Operation you require on site'},
      { name: 'Maximum Rated Capacity of your equipment for your site'},
      { name: 'Complete Equipment list'},
      { name: 'American Express, Visa, MasterCard'}
    ];
  }
  goBack(): void {
    // Implement logic to go back, for example:
    this.router.navigate(['/crushorg']);
  }

  continue(): void {
    // Implement logic to continue, for example:
    this.router.navigate(['/crushedit']);
  }
  

}
