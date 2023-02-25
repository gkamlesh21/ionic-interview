import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


// Components
import { AccordionComponent } from "./accordion/accordion.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    AccordionComponent
  ],
  declarations: [
    AccordionComponent
  ],
  providers: []
})

export class SharedModule { }