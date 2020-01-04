import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractFormElement } from '@model/form-elements/abstract-form-element';

@Component({
  selector: 'app-form-viewer-element',
  templateUrl: './form-viewer-element.component.html',
  styleUrls: ['./form-viewer-element.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormViewerElementComponent {

  @Input() element: AbstractFormElement;

}
