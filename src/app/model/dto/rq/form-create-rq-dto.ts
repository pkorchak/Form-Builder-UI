import { FormElement } from '@model/form-elements/abstract-form-element';

export interface FormCreateRqDto {
  name: string;
  columnsNum: number;
  elements: FormElement[];
}
