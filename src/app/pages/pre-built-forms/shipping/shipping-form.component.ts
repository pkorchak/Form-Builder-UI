import { Component } from '@angular/core';
import shippingFormStructure from './shipping-form-structure.json';

@Component({
  selector: 'app-shipping-form',
  template: `
    <app-pre-built-form [formStructureJson]="formStructureJson"></app-pre-built-form>`
})
export class ShippingFormComponent {

  formStructureJson = shippingFormStructure;
}
