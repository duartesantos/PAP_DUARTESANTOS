import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasFeitasPage } from './tarefas-feitas.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasFeitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefasFeitasPageRoutingModule {}
