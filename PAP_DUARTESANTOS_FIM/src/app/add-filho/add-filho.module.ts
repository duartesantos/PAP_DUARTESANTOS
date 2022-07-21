import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFilhoPageRoutingModule } from './add-filho-routing.module';

import { AddFilhoPage } from './add-filho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFilhoPageRoutingModule
  ],
  declarations: [AddFilhoPage]
})
export class AddFilhoPageModule {}
