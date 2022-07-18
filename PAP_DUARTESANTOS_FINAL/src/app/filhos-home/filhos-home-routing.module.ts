import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilhosHomePage } from './filhos-home.page';

const routes: Routes = [
  {
    path: '',
    component: FilhosHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilhosHomePageRoutingModule {}
