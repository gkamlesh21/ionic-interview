import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from "./../../../node_modules/ngx-filter-pipe";

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

// SharedComponents
import { SharedModule } from "./../component/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    SharedModule,
    FilterPipeModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
