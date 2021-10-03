import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_COMPONENTS ],
  exports: [ ...MATERIAL_COMPONENTS ]
})
export class MaterialUiModule { }
