import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmCodePage } from './confirm-code.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmCodePageRoutingModule {}
