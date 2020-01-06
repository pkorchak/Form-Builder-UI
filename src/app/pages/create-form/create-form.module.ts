import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { FormEditorModule } from '@widgets/form-editor/form-editor.module';
import { CreateFormRoutingModule } from './create-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormEditorModule,
    CreateFormRoutingModule
  ],
  declarations: [
    CreateFormComponent
  ]
})
export class CreateFormModule { }
