import { Routes,RouterModule } from '@angular/router';
import { CrushDustComponent } from './crush-dust/crush-dust.component';
import { CrushDustPage1Component } from './crush-dust-page1/crush-dust-page1.component';
import { CrushDustPage2Component } from './crush-dust-page2/crush-dust-page2.component';
import { CrushDustPage3Component } from './crush-dust-page3/crush-dust-page3.component';
import { NgModule } from '@angular/core';

import { PermitTypeComponent } from './permit-type/permit-type.component';
import { CrushingOrganizationComponent } from './crushing-organization/crushing-organization.component';
import { CrushingIndexComponent } from './crushing-index/crushing-index.component';
import { CrushingEditComponent } from './crushing-edit/crushing-edit.component';
import { SeptageEditComponent } from './septage-edit/septage-edit.component';

export const routes: Routes = [
    {
        path: 'crush-dust',
        component: CrushDustComponent
       
    },
    {
        path: 'crush-dust-page1',
        component: CrushDustPage1Component
        
    },
    {
        path: 'crush-dust-page2',
        component: CrushDustPage2Component
       
    },
    {
        path: 'crush-dust-page3',
        component: CrushDustPage3Component
    },
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