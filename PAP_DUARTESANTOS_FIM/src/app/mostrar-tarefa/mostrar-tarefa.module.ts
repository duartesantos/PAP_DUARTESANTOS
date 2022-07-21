import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarTarefaPageRoutingModule } from './mostrar-tarefa-routing.module';

import { MostrarTarefaPage } from './mostrar-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarTarefaPageRoutingModule
  ],
  declarations: [MostrarTarefaPage]
})
export class MostrarTarefaPageModule {}
