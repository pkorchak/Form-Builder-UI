import { Component } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormStructureMapper } from '@services/form-structure-mapper';
import registerFormStructure from './register-form-structure.json';

@Component({
  selector: 'app-register-form-view',
  template: `
    <app-form-container>
      <app-form-viewer [formStructure]="formStructure"></app-form-viewer>
    </app-form-container>`
})
export class RegisterFormViewComponent {

  formStructure: FormStructure = this.formStructureMapper.map(registerFormStructure);

  constructor(private formStructureMapper: FormStructureMapper) {
  }
}
