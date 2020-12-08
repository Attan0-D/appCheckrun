import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsAndConditions2Page } from './terms-and-conditions2.page';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditions2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndConditions2PageRoutingModule {}
