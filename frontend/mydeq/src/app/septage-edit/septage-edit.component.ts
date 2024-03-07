import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-septage-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './septage-edit.component.html',
  styleUrl: './septage-edit.component.css'
})
export class SeptageEditComponent {
  sections: { id:Number,name: string, status: string }[] = [
    {id: 1, name: 'Vehicle Information', status: 'Not Started' },
    {id:2, name: 'County Inspection Form', status: 'Not Started' },
    {id:3, name: 'Disposal Location', status: 'Not Started' },
    { id:4,name: 'Location of Vehicle', status: 'Not Started' },
    { id:5,name: 'Contact Information', status: 'Not Started' }
  ];
  isCertifyButtonEnabled(): boolean {
    return this.sections.every(section => section.status === 'InProgress');
  }

  changeStatus(index: number) {
    this.sections[index].status = 'InProgress';
  }


}
