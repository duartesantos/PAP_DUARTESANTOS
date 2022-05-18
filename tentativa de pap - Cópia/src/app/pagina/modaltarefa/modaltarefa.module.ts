import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltarefaPageRoutingModule } from './modaltarefa-routing.module';

import { ModaltarefaPage } from './modaltarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltarefaPageRoutingModule
  ],
  declarations: [ModaltarefaPage]
})
export class ModaltarefaPageModule {}
