import { Injectable } from '@angular/core';
import { AbstractFormElement, FormElement } from '@model/form-elements/abstract-form-element';
import { FormElementType } from '@model/form-element-type';
import { CheckboxFormElement } from '@model/form-elements/checkbox-form-element';
import { InputFormElement } from '@model/form-elements/input-form-element';
import { DateFormElement } from '@model/form-elements/date-form-element';
import { TextareaFormElement } from '@model/form-elements/textarea-form-element';

const map = (element: FormElement, elementInstance: AbstractFormElement) =>
  Object.assign(elementInstance, ...Object.keys(element)
    .map(key => ({[key]: (element[key])})));

@Injectable({providedIn: 'root'})
export class FormElementsFactory {

  public createInstance(element: FormElement): AbstractFormElement {
    let elementInstance: AbstractFormElement;

    switch (element.type) {
      case FormElementType.CHECKBOX:
        elementInstance = map(element, new CheckboxFormElement());
        break;
      case FormElementType.LONG_TEXT:
        elementInstance = map(element, new TextareaFormElement());
        break;
      case FormElementType.SHORT_TEXT:
      case FormElementType.EMAIL:
      case FormElementType.PASSWORD:
      case FormElementType.NUMBER:
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
