import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register/register-form.component';
import { ShippingFormComponent } from './shipping/shipping-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'register'},
  {path: 'register', component: RegisterFormComponent},
  {path: 'shipping', component: ShippingFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreBuiltFormsRoutingModule {
}
