import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormViewerElementComponent } from './element/form-viewer-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzInputModule } from 'ng-zorro-antd';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    PerfectScrollbarModule
  ],
  declarations: [FormViewerComponent, FormViewerElementComponent],
  exports: [FormViewerComponent]
})
export class FormViewerModule {
}
