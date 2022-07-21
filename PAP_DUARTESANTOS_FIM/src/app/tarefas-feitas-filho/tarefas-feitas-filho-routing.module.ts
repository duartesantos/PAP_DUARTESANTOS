import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasFeitasFilhoPage } from './tarefas-feitas-filho.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasFeitasFilhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefasFeitasFilhoPageRoutingModule {}
