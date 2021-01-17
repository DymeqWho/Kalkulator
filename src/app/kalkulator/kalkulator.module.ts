import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalkulatorComponent } from '../kalkulator/kalkulator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [KalkulatorComponent],
  exports: [KalkulatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class KalkulatorModule { }
