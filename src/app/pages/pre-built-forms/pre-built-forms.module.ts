import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreBuiltFormsRoutingModule } from './pre-built-forms-routing.module';
import { RegisterFormViewComponent } from './register/register-form-view.component';
import { FormViewerModule } from '@widgets/form-viewer';
import { FormStructureMapper } from '@services/form-structure-mapper';
import { FormElementsFactory } from '@services/form-elements-factory';


@NgModule({
  imports: [
    CommonModule,
    PreBuiltFormsRoutingModule,
    FormViewerModule
  ],
  declarations: [RegisterFormViewComponent],
  providers: [
    FormStructureMapper,
    FormElementsFactory
  ]
})
export class PreBuiltFormsModule {
}
