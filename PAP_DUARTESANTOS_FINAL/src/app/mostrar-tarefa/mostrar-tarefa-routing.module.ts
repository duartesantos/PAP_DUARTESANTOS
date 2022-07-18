import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarTarefaPage } from './mostrar-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarTarefaPageRoutingModule {}
