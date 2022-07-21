import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosCompradosPage } from './produtos-comprados.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosCompradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosCompradosPageRoutingModule {}
