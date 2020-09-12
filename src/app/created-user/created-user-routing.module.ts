import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedUserPage } from './created-user.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedUserPageRoutingModule {}
