import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@widgets/auth/auth.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/create' },
  { path: 'login', component: AuthComponent },
  {
    path: 'pre-built',
    loadChildren: () => import('./pages/pre-built-forms/pre-built-forms.module').then(m => m.PreBuiltFormsModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-form/create-form.module').then(m => m.CreateFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
