import { Component } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormElementType } from '@model/form-element-type';
import { FormElementsFactory } from '@services/form-elements-factory';
import { FormStructureMapper } from '@services/form-structure-mapper';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['../../styles/modules/_buttons.less']
})
export class CreateFormComponent {

  isInEditor = true;

  formStructure: FormStructure = {
    columnsNum: 1,
    name: 'Create an account',
    elements: [
      this.formElementsFactory.createInstance({
        label: 'Email',
        type: FormElementType.INPUT,
        required: true
      }),
      this.formElementsFactory.createInstance({
        label: 'First Name',
        type: FormElementType.DATE_PICKER,
        required: true
      })
    ]
  };

  constructor(private formElementsFactory: FormElementsFactory,
              private formStructureMapper: FormStructureMapper) {
  }

  onShowFormPreviewClick(newFormStructure: any) {
    this.formStructure = this.formStructureMapper.map(newFormStructure);
    this.isInEditor = false;
  }

}
