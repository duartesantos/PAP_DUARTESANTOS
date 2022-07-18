import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilhosHomePageRoutingModule } from './filhos-home-routing.module';

import { FilhosHomePage } from './filhos-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilhosHomePageRoutingModule
  ],
  declarations: [FilhosHomePage]
})
export class FilhosHomePageModule {}
