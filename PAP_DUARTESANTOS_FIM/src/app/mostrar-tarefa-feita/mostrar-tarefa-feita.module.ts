import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarTarefaFeitaPageRoutingModule } from './mostrar-tarefa-feita-routing.module';

import { MostrarTarefaFeitaPage } from './mostrar-tarefa-feita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarTarefaFeitaPageRoutingModule
  ],
  declarations: [MostrarTarefaFeitaPage]
})
export class MostrarTarefaFeitaPageModule {}
