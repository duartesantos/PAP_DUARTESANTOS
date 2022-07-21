import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosCompradosFilhoPageRoutingModule } from './produtos-comprados-filho-routing.module';

import { ProdutosCompradosFilhoPage } from './produtos-comprados-filho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosCompradosFilhoPageRoutingModule
  ],
  declarations: [ProdutosCompradosFilhoPage]
})
export class ProdutosCompradosFilhoPageModule {}
