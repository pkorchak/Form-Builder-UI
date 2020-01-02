import { AbstractFormElement } from './form-elements/abstract-form-element';

export class FormStructure {
  /**
   * Number of columns in the form grid
   */
  columnsNum: number;
  /**
   * Name of the form, placed at the top part of it
   */
  name: string;
  /**
   * Elements of the form
   */
  elements: AbstractFormElement[];
}
