import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedUserPageRoutingModule } from './created-user-routing.module';

import { CreatedUserPage } from './created-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedUserPageRoutingModule
  ],
  declarations: [CreatedUserPage]
})
export class CreatedUserPageModule {}
