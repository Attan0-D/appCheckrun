import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterListPageRoutingModule } from './register-list-routing.module';

import { RegisterListPage } from './register-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterListPageRoutingModule
  ],
  declarations: [RegisterListPage]
})
export class RegisterListPageModule {}
