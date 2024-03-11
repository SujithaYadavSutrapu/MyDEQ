import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermitLocationComponent } from './permit-location/permit-location.component';
import { AddressOverlayComponent } from './address-overlay/address-overlay.component';
import { PermitLocationOrglistComponent } from './permit-location-orglist/permit-location-orglist.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'permit-location', component: PermitLocationComponent },
    { path: 'address', component: AddressOverlayComponent },
    { path: 'permit', component: PermitLocationOrglistComponent }
];
