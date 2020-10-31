import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgottenPasswordPageRoutingModule } from './forgotten-password-routing.module';

import { ForgottenPasswordPage } from './forgotten-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgottenPasswordPageRoutingModule
  ],
  declarations: [ForgottenPasswordPage]
})
export class ForgottenPasswordPageModule {}
