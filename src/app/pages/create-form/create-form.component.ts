import { Component } from '@angular/core';
import { FormStructure } from '@model/form-structure';

@Component({
  selector: 'app-create-form',
  template: `<app-form-editor [formStructure]="formStructure"></app-form-editor>`
})
export class CreateFormComponent {

  formStructure: FormStructure = {
    columnsNum: 1,
    name: 'New Form',
    elements: []
  };
}
