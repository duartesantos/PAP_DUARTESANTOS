import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalprodutoPageRoutingModule } from './modalproduto-routing.module';

import { ModalprodutoPage } from './modalproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalprodutoPageRoutingModule
  ],
  declarations: [ModalprodutoPage]
})
export class ModalprodutoPageModule {}
