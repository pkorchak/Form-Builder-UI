import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register/register-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'register'},
  {path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreBuiltFormsRoutingModule {
}
