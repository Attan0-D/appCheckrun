import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowListPage } from './show-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShowListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowListPageRoutingModule {}
