import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private addressFields :any = {
    addressLine1:'',
    addressLine2:'',
    city:'',
    zipCode:'',
  };
  constructor() { }

  setAddressFields(addressData: any):void{
    this.addressFields = addressData;
    
  }

  getAddressFields():any{
    return this.addressFields;
  }
}