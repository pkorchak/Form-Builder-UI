import { Component } from '@angular/core';
import registerFormStructure from './register-form-structure.json';

@Component({
  selector: 'app-register-form',
  template: `
    <app-pre-built-form [formStructureJson]="formStructureJson"></app-pre-built-form>`
})
export class RegisterFormComponent {

  formStructureJson = registerFormStructure;
}
