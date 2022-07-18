import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarTarefaFeitaPage } from './mostrar-tarefa-feita.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarTarefaFeitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarTarefaFeitaPageRoutingModule {}
