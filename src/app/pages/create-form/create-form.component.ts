import { Component } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';

@Component({
  selector: 'app-create-form',
  template: `
    <app-form-editor [formStructure]="formStructure"></app-form-editor>`
})
export class CreateFormComponent {

  formStructure: FormStructure = {
    columnsNum: 1,
    name: 'New Form',
    elements: [
      this.formElementsFactory.createInstance({
        label: 'New Field',
        type: FormElementType.INPUT
      })
    ]
  };

  constructor(private formElementsFactory: FormElementsFactory) {
  }

}
