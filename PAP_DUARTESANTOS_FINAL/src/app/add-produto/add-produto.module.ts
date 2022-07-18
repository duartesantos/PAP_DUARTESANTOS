import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProdutoPageRoutingModule } from './add-produto-routing.module';

import { AddProdutoPage } from './add-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProdutoPageRoutingModule
  ],
  declarations: [AddProdutoPage]
})
export class AddProdutoPageModule {}
