import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewerComponent } from './form-viewer.component';
import { FormViewerElementComponent } from './element/form-viewer-element.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormViewerComponent, FormViewerElementComponent],
  exports: [FormViewerComponent]
})
export class FormViewerModule {
}
