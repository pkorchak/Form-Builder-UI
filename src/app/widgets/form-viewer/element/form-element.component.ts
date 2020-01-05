import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormElementComponent {

  @Input() element: AbstractFormElement;

}
