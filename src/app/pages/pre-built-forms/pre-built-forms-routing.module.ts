import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreBuiltFormsComponent } from './pre-built-forms.component';

const routes: Routes = [
  {path: '', component: PreBuiltFormsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreBuiltFormsRoutingModule {
}
