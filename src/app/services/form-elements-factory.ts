import { Injectable } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';
import { FormElementType } from '@model/form-element-type';
import { CheckboxFormElement } from '@model/form-elements/checkbox-form-element';
import { InputFormElement } from '@model/form-elements/input-form-element';

const map = (object: any, elementInstance: AbstractFormElement) =>
  Object.assign(elementInstance, ...Object.keys(object)
    .map(key => ({[key]: (object[key])})));

@Injectable()
export class FormElementsFactory {

  public createInstance(element: any): AbstractFormElement {
    let elementInstance: AbstractFormElement;

    switch (element.type) {
      case FormElementType.CHECKBOX:
        elementInstance = map(element, new CheckboxFormElement());
        break;
      case FormElementType.INPUT:
        elementInstance = map(element, new InputFormElement());
        break;
    }
    elementInstance.initFormControl();

    return elementInstance;
  }
}
