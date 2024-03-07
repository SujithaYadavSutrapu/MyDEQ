import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permit-type',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './permit-type.component.html',
  styleUrl: './permit-type.component.css',
  

})
export class PermitTypeComponent {
  categories: {pId:Number, name: string, elements: string[], selected: string }[] = [
    {pId:1, name: 'Air', elements: ['Concrete Batch Plant General Plant', 'Crushing & Screening General Permit', 'Fleet Station Permit', 'Hot Mix Asplalt Plant General Permit'], selected: '' },
    {pId:2, name: 'Water', elements: ['AZEPDS De Minimus ', 'AZEPDS Small Municipal Seprate Strom Sewe System ', 'AZEPDS Strom Water Construction Notice of Ndi', 'type 2.0.1 and/or 2.04 General Permit','Well Inventory'], selected: '' },
    {pId:3, name: 'Wastage', elements: ['EPA Id', 'Pollution Preventation (p2)', 'Septage Hauler License', 'AZSERTC Tier II Create New Faculty'], selected: '' }
  ];
  constructor(private router: Router) {}
  getSelectedElements(): void {
    this.categories.forEach(category => {
      console.log(`${category.name} Selected:`, category.selected);
      
    });
  }
  onCheckbox(selectedElement: string): void {
    console.log('Selected Element:', selectedElement);
    if (selectedElement === 'Crushing & Screening General Permit') {
      // Navigate to VehicleComponent
      this.router.navigate(['/crushorg']);
    }
    else if(selectedElement==='Septage Hauler License'){
      this.router.navigate(['/septage'])
    }
    // Implement your logic here
  }

}
