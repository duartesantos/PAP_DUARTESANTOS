import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefasFeitasFilhoPageRoutingModule } from './tarefas-feitas-filho-routing.module';

import { TarefasFeitasFilhoPage } from './tarefas-feitas-filho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefasFeitasFilhoPageRoutingModule
  ],
  declarations: [TarefasFeitasFilhoPage]
})
export class TarefasFeitasFilhoPageModule {}
