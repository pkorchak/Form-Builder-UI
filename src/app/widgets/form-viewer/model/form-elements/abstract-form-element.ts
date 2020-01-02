import { FormElementType } from '../form-element-type';

export class AbstractFormElement {
  /**
   * A label placed above the element's control
   */
  label: string;
  /**
   * Element's control name (unique for the given form)
   */
  name: string;
  /**
   * Type of the element's control like 'input', 'textarea', etc.
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
