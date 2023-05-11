import { Injectable } from '@angular/core';
import { FormElementsFactory } from './form-elements-factory';
import { FormStructure } from '@model/form-structure';

@Injectable({providedIn: 'root'})
export class FormStructureMapper {

  constructor(private formElementsFactory: FormElementsFactory) {
  }

  public map(jsonData: FormStructure): FormStructure {
    const formStructure = new FormStructure();
    formStructure.columnsNum = jsonData.columnsNum || 1;
    formStructure.name = jsonData.name;
    formStructure.elements = [];

    if (jsonData.elements) {
      jsonData.elements.forEach(element => formStructure.elements.push(
        this.formElementsFactory.createInstance(element))
      );
    }

    return formStructure;
  }
}
