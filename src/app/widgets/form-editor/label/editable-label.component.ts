import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableLabelComponent {

  @Input() parentFormControl: FormControl<string>;
  @Input() options: EditableLabelOptions = {};

  @ViewChild('input', {static: true}) input: ElementRef;

  selectInputContent(event: FocusEvent): void {
    (event.target as HTMLInputElement).select();
  }

  public focusOnInput(): void {
    this.input.nativeElement.focus();
  }
}

export interface EditableLabelOptions {
  color?: string;
  height?: string;
  fontSize?: string;
  borderBottomColor?: string;
}
