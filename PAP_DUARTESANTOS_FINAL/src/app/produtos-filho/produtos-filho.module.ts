import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosFilhoPageRoutingModule } from './produtos-filho-routing.module';

import { ProdutosFilhoPage } from './produtos-filho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosFilhoPageRoutingModule
  ],
  declarations: [ProdutosFilhoPage]
})
export class ProdutosFilhoPageModule {}
