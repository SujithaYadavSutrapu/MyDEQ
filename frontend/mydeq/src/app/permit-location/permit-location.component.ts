import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permit-location',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './permit-location.component.html',
  styleUrl: './permit-location.component.css',
  providers: [DataSharingService]
})



export class PermitLocationComponent {
  showAddressFields: boolean = false;
  addressData: any = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    zipCode: ''
  };

  toggleAddressFields() {
    this.showAddressFields = !this.showAddressFields;
  }

  constructor(private dataSharingService: DataSharingService, private router: Router) {

  }
  continue() {
    this.dataSharingService.setAddressFields(this.addressData);
    console.log('Address Data after setting:', this.dataSharingService.getAddressFields());
    this.router.navigate(['/address']);
    this.router.events.subscribe(event => {
      console.log(event);
    })
  }

  back() {
    this.router.navigate(['/permit']);
  }

}
