import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreBuiltFormsRoutingModule } from './pre-built-forms-routing.module';
import { RegisterFormViewComponent } from './register/register-form-view.component';
import { FormViewerModule } from '@widgets/form-viewer';
import { FormContainerModule } from '@widgets/form-container/form-container.module';


@NgModule({
  imports: [
    CommonModule,
    PreBuiltFormsRoutingModule,
    FormViewerModule,
    FormContainerModule
  ],
  declarations: [RegisterFormViewComponent]
})
export class PreBuiltFormsModule {
}
