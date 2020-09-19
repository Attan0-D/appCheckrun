import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowListPageRoutingModule } from './show-list-routing.module';

import { ShowListPage } from './show-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowListPageRoutingModule
  ],
  declarations: [ShowListPage]
})
export class ShowListPageModule {}
