import { AbstractFormElement } from './abstract-form-element';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

export class InputFormElement extends AbstractFormElement {

  /**
   * Type of the input. Valid values are 'text', 'email', 'number' and 'password'
   */
  inputType: InputType = InputType.TEXT;

  initFormControl(): void {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.inputType === InputType.EMAIL) {
      validators.push(Validators.email);
    }

    this.formControl = new FormControl(null, validators);
  }
}

export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  NUMBER = 'number',
  PASSWORD = 'password'
}
