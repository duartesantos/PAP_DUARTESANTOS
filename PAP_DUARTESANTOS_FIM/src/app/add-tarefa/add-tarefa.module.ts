import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTarefaPageRoutingModule } from './add-tarefa-routing.module';

import { AddTarefaPage } from './add-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTarefaPageRoutingModule
  ],
  declarations: [AddTarefaPage]
})
export class AddTarefaPageModule {}
