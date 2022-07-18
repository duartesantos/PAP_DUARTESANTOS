import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTarefaPage } from './add-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: AddTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTarefaPageRoutingModule {}
