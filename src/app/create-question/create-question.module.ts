import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateQuestionPageRoutingModule } from './create-question-routing.module';

import { CreateQuestionPage } from './create-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateQuestionPageRoutingModule
  ],
  declarations: [CreateQuestionPage]
})
export class CreateQuestionPageModule {}
