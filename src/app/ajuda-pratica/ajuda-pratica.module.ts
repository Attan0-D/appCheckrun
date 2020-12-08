import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudaPraticaPageRoutingModule } from './ajuda-pratica-routing.module';

import { AjudaPraticaPage } from './ajuda-pratica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudaPraticaPageRoutingModule
  ],
  declarations: [AjudaPraticaPage]
})
export class AjudaPraticaPageModule {}
