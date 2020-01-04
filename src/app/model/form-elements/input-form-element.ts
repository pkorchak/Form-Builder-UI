import { AbstractFormElement } from './abstract-form-element';
import { FormControl, Validators } from '@angular/forms';

export class InputFormElement extends AbstractFormElement {

  initFormControl(): void {
    this.formControl = new FormControl(null, this.required ? Validators.required : null);
  }
}
