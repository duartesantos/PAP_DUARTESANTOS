import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFilhoPage } from './add-filho.page';

const routes: Routes = [
  {
    path: '',
    component: AddFilhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFilhoPageRoutingModule {}
