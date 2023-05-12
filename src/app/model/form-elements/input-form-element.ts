import { AbstractFormElement } from './abstract-form-element';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FormElementType } from '@model/form-element-type';

export class InputFormElement extends AbstractFormElement {

  initFormControl(): void {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.type === FormElementType.EMAIL) {
      validators.push(Validators.email);
    }
    if (this.type === FormElementType.PASSWORD) {
      validators.push(Validators.minLength(6));
    }

    this.formControl = new FormControl<string | null>(null, validators);
  }
}
