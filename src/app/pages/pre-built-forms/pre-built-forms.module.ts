import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreBuiltFormsRoutingModule } from './pre-built-forms-routing.module';
import { RegisterFormComponent } from './register/register-form.component';
import { FormViewerModule } from '@widgets/form-viewer';
import { PreBuiltFormComponent } from './pre-built-form.component';
import { FormEditorModule } from '@widgets/form-editor/form-editor.module';
import { ShippingFormComponent } from './shipping/shipping-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const ANT_DESIGN_MODULES = [NzButtonModule, NzIconModule];

@NgModule({
  imports: [
    CommonModule,
    PreBuiltFormsRoutingModule,
    FormViewerModule,
    FormEditorModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    PreBuiltFormComponent,
    RegisterFormComponent,
    ShippingFormComponent
  ]
})
export class PreBuiltFormsModule {
}
