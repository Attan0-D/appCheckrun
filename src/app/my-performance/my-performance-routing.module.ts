import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPerformancePage } from './my-performance.page';

const routes: Routes = [
  {
    path: '',
    component: MyPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPerformancePageRoutingModule {}
