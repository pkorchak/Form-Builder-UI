import { Component } from '@angular/core';
import { FormElementType, FormStructure } from '@widgets/form-viewer';

@Component({
  selector: 'app-register-form-view',
  template: '<app-form-viewer [formStructure]="formStructure"></app-form-viewer>'
})
export class RegisterFormViewComponent {

  formStructure: FormStructure = {
    columnsNum: 2,
    name: 'Create an account',
    elements: [
      {
        label: 'Email',
        name: 'fc-1',
        type: FormElementType.INPUT,
        required: true,
        placeholder: 'Enter email'
      },
      {
        label: 'First Name',
        name: 'fc-2',
        type: FormElementType.INPUT,
        required: true,
        placeholder: 'Enter first name'
      },
      {
        label: 'Last Name',
        name: 'fc-3',
        type: FormElementType.INPUT,
        placeholder: 'Enter last name'
      },
      {
        label: 'Password',
        name: 'fc-4',
        type: FormElementType.INPUT,
        required: true,
        placeholder: 'Enter password'
      },
      {
        label: 'Repeat Password',
        name: 'fc-5',
        type: FormElementType.INPUT,
        required: true,
        placeholder: 'Repeat password'
      }
    ]
  };
}
