
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DataComponent } from './data/data.component';
import { WorkdayComponent } from './workday/workday.component';
import { AdobeSignComponent } from './adobe-sign/adobe-sign.component';
import { OutlookComponent } from './outlook/outlook.component';
import { SAPConcurComponent } from './sapconcur/sapconcur.component';
import { OpentextComponent } from './opentext/opentext.component';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent },

  { path: 'datapage', component: DataComponent },
  { path: 'workday', component: WorkdayComponent },
  { path: 'adobesign', component: AdobeSignComponent },
  { path: 'outlook', component: OutlookComponent },
  { path: 'sapconcur', component: SAPConcurComponent },
  { path: 'opentext', component: OpentextComponent },
{ path: '', redirectTo: 'homepage', pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
