import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormViewComponent } from './register/register-form-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'register'},
  {path: 'register', component: RegisterFormViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreBuiltFormsRoutingModule {
}
