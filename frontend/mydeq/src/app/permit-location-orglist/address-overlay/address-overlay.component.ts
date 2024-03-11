import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-address-overlay',
  standalone: true,
  imports: [],
  templateUrl: './address-overlay.component.html',
  styleUrl: './address-overlay.component.css'
})
export class AddressOverlayComponent implements OnInit {
  addressData: any;


  constructor(private dataSharingService: DataSharingService) {

  }
  ngOnInit(): void {
    this.addressData = this.dataSharingService.getAddressFields();
    console.log('Address Data in AddressComponent:', this.addressData);
  }

  onContinue() {
    console.log("button is clicked");
  }

  onCancel() {
    console.log("cancel is clicked");
  }

}
