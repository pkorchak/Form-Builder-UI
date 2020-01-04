import { Component } from '@angular/core';
import { FormStructure } from '@widgets/form-viewer';
import registerFormStructure from './register-form-structure.json';

@Component({
  selector: 'app-register-form-view',
  template: '<app-form-viewer [formStructure]="formStructure"></app-form-viewer>'
})
export class RegisterFormViewComponent {
  formStructure: FormStructure = registerFormStructure;
}
