import { NgModel } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { PermitTypeComponent } from './permit-type/permit-type.component';
import { NgModule } from '@angular/core';
import { CrushingOrganizationComponent } from './crushing-organization/crushing-organization.component';
import { CrushingIndexComponent } from './crushing-index/crushing-index.component';
import { CrushingEditComponent } from './crushing-edit/crushing-edit.component';
import { SeptageEditComponent } from './septage-edit/septage-edit.component';

export const routes: Routes = [
    {'path':'permit',component:PermitTypeComponent},
    {'path':'crushorg',component:CrushingOrganizationComponent},
    {'path':'crushindex',component:CrushingIndexComponent },
    {'path':'crushedit',component:CrushingEditComponent},
    {'path':'septage',component:SeptageEditComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}