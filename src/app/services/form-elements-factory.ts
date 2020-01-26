import { Injectable } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';
import { FormElementType } from '@model/form-element-type';
import { CheckboxFormElement } from '@model/form-elements/checkbox-form-element';
import { InputFormElement } from '@model/form-elements/input-form-element';
import { DateFormElement } from '@model/form-elements/date-form-element';

const map = (object: any, elementInstance: AbstractFormElement) =>
  Object.assign(elementInstance, ...Object.keys(object)
    .map(key => ({[key]: (object[key])})));

@Injectable({providedIn: 'root'})
export class FormElementsFactory {

  public createInstance(element: any): AbstractFormElement {
    let elementInstance: AbstractFormElement;

    switch (element.type) {
      case FormElementType.CHECKBOX:
        elementInstance = map(element, new CheckboxFormElement());
        break;
      case FormElementType.SHORT_TEXT:
      case FormElementType.EMAIL:
      case FormElementType.PASSWORD:
        elementInstance = map(element, new InputFormElement());
        break;
      case FormElementType.DATE:
        elementInstance = map(element, new DateFormElement());
        break;
      default:
        throw new TypeError(`Unknown type "${element.type}". Valid values are ${Object.keys(FormElementType)
          .map(key => FormElementType[key])}`);
    }
    elementInstance.initFormControl();

    return elementInstance;
  }
}
