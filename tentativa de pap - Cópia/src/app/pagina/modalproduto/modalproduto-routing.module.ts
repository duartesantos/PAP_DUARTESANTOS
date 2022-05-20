import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalprodutoPage } from './modalproduto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalprodutoPageRoutingModule {}
