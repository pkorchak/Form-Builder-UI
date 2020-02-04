import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextareaFormElement } from '@model/form-elements/textarea-form-element';

@Component({
  selector: 'app-textarea-form-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<textarea nz-input
                       style="resize: none"
                       [nzAutosize]="{ minRows: 3, maxRows: 6 }"
                       [formControl]="element.formControl"
                       [placeholder]="element.placeholder || ''">
  </textarea>`
})
export class TextareaFormElementComponent {

  @Input() element: TextareaFormElement;

}
