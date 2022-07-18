import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefasFeitasPageRoutingModule } from './tarefas-feitas-routing.module';

import { TarefasFeitasPage } from './tarefas-feitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefasFeitasPageRoutingModule
  ],
  declarations: [TarefasFeitasPage]
})
export class TarefasFeitasPageModule {}
