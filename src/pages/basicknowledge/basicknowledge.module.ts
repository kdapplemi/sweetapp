import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicKnowledgePage } from './basicknowledge';

@NgModule({
  declarations: [
    BasicKnowledgePage,
  ],
  imports: [
    IonicPageModule.forChild(BasicKnowledgePage),
  ],
})
export class BasicKnowledgePageModule {}
