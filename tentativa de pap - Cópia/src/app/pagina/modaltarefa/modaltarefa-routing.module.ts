import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltarefaPage } from './modaltarefa.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltarefaPageRoutingModule {}
