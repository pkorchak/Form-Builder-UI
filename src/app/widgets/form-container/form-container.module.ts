import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
  ],
  exports: [FormContainerComponent]
})
export class FormContainerModule {
}
