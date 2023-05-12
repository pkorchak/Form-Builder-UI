import { AbstractFormElement } from '@model/form-elements/abstract-form-element';
import { FormControl, Validators } from '@angular/forms';

export class DateFormElement extends AbstractFormElement {

  initFormControl(): void {
    this.formControl = new FormControl<string | null>(null, this.required ? Validators.required : null);
  }
}
