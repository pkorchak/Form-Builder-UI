import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [
    CommonModule,
    NgScrollbarModule,
  ],
  exports: [FormContainerComponent]
})
export class FormContainerModule {
}
