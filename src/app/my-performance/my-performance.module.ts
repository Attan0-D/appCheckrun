import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPerformancePageRoutingModule } from './my-performance-routing.module';

import { MyPerformancePage } from './my-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPerformancePageRoutingModule
  ],
  declarations: [MyPerformancePage]
})
export class MyPerformancePageModule {}
