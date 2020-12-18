import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaPraticaPage } from './ajuda-pratica.page';

const routes: Routes = [
  {
    path: '',
    component: AjudaPraticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaPraticaPageRoutingModule {}
