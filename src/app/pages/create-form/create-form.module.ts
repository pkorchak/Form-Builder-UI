import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { FormEditorModule } from '@widgets/form-editor/form-editor.module';
import { CreateFormRoutingModule } from './create-form-routing.module';
import { FormViewerModule } from '@widgets/form-viewer';
import { FormStructureMapper } from '@services/form-structure-mapper';
import { FormElementsFactory } from '@services/form-elements-factory';
import { FormContainerModule } from '@widgets/form-container/form-container.module';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';

const ANT_DESIGN_MODULES = [NzButtonModule, NzIconModule];

@NgModule({
  imports: [
    CommonModule,
    FormEditorModule,
    CreateFormRoutingModule,
    FormViewerModule,
    FormContainerModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    CreateFormComponent
  ],
  providers: [
    FormStructureMapper,
    FormElementsFactory
  ]
})
export class CreateFormModule {
}
