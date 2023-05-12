import { AbstractFormElement } from './abstract-form-element';
import { FormControl, Validators } from '@angular/forms';

export class CheckboxFormElement extends AbstractFormElement {

  initFormControl(): void {
    this.formControl = new FormControl<boolean | null>(null, this.required ? Validators.requiredTrue : null);
  }
}
