import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndConditions2PageRoutingModule } from './terms-and-conditions2-routing.module';

import { TermsAndConditions2Page } from './terms-and-conditions2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsAndConditions2PageRoutingModule
  ],
  declarations: [TermsAndConditions2Page]
})
export class TermsAndConditions2PageModule {}
