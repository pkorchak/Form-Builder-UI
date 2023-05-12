import { FormElementType } from '../form-element-type';
import { FormControl } from '@angular/forms';

export interface FormElement {
  /**
   * A label placed above the element's control
   */
  label: string;
  /**
   * Type of the element's control like 'short text', 'date', etc.
   */
  type: FormElementType;
  /**
   * An indication that the form cannot be submitted if the element's control value is not filled out
   */
  required?: boolean;
  /**
   * Element's control placeholder
   */
  placeholder?: string;
}

export abstract class AbstractFormElement implements FormElement {
  label: string;
  type: FormElementType;
  required?: boolean;
  placeholder?: string;
  /**
   * Form control used in the generated reactive form
   */
  formControl: FormControl<string | number | boolean | null>;

  abstract initFormControl(): void;
}
