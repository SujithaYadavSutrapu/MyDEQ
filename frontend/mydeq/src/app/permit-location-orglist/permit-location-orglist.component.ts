import { Component, NgModule, ViewChild } from '@angular/core';
import { OrganizationListTableComponent } from '../organization-list-table/organization-list-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permit-location-orglist',
  standalone: true,
  imports: [OrganizationListTableComponent, MatPaginatorModule, MatRadioButton],
  templateUrl: './permit-location-orglist.component.html',
  styleUrl: './permit-location-orglist.component.css'
})
export class PermitLocationOrglistComponent {
  @ViewChild('addNewRadioButton') addNewRadioButton!: any;
  constructor(private router: Router) {

  }

  continue() {
    if (this.addNewRadioButton.checked) {
      this.router.navigate(['/permit-location']);
    }
  }
}