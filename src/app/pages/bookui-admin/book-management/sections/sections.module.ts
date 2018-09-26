import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import {ThemeModule} from '../../../../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';

const components = [
  SectionsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class SectionsModule { }
