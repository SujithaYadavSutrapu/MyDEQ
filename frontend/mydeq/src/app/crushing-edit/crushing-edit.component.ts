import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crushing-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crushing-edit.component.html',
  styleUrl: './crushing-edit.component.css'
})
export class CrushingEditComponent {
  sections: { id:Number,name: string, status: string }[] = [
    {id: 1, name: 'Permit Location', status: 'Not Started' },
    {id:2, name: 'Rule 316 Dust Control Plan/operation', status: 'Not Started' },
    {id:3, name: 'Your Hours of Operation you require on site', status: 'Not Started' },

    {id:4, name: 'Maximum Rated Capacity of your equipment for your site', status: 'Not Started' },
    { id:5,name: 'Complete Equipment list', status: 'Not Started' },
    { id:6,name: 'American Express,Visa,MasterCard', status: 'Not Started' }
  ];
  constructor(private router: Router) {}

  changeStatus(index: number) {
    this.sections[index].status = 'InProgress';
  }
  
  isCertifyButtonEnabled(): boolean {
    return this.sections.every(section => section.status === 'InProgress');
  }
  
  navigateToCertifyPage() {
    if (this.isCertifyButtonEnabled()) {
      this.router.navigate(['/crush-dust']);
    } else {
      // If button is disabled, handle the logic accordingly
    }
  }
}