import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreBuiltFormsComponent } from './pre-built-forms.component';
import { PreBuiltFormsRoutingModule } from './pre-built-forms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PreBuiltFormsRoutingModule
  ],
  declarations: [PreBuiltFormsComponent],
  exports: [PreBuiltFormsComponent]
})
export class PreBuiltFormsModule {
}
