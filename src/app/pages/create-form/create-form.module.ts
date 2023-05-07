import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { FormEditorModule } from '@widgets/form-editor/form-editor.module';
import { CreateFormRoutingModule } from './create-form-routing.module';
import { FormViewerModule } from '@widgets/form-viewer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const ANT_DESIGN_MODULES = [NzButtonModule, NzIconModule];

@NgModule({
  imports: [
    CommonModule,
    FormEditorModule,
    CreateFormRoutingModule,
    FormViewerModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    CreateFormComponent
  ]
})
export class CreateFormModule {
}
