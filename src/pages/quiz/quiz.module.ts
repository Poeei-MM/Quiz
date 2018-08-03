import { QuizPage } from './quiz';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    QuizPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
  ],
  exports: [
    QuizPage
  ]
})

export class QuizPageModule { }
