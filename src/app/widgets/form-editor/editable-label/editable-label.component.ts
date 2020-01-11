import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableLabelComponent {

  @Input() parentFormControl: FormControl;
  @Input() options: EditableLabelOptions;

  selectInputContent($event) {
    $event.target.select();
  }

}

export interface EditableLabelOptions {
  color?: string;
  height?: string;
  fontSize?: string;
  borderBottom?: string;
}
