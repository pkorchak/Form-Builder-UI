import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: [
    './form-viewer.component.less',
    '../../styles/modules/_form-block.less',
    '../../styles/modules/_buttons.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormViewerComponent implements OnInit, OnChanges {

  @Input() formStructure: FormStructure;

  formGroup = new UntypedFormGroup({});

  columnWidth: string;

  ngOnInit(): void {
    this.formStructure.elements
      .forEach((element, index) => this.formGroup.addControl(index + '', element.formControl));
  }

  ngOnChanges(): void {
    this.columnWidth = 100 / this.formStructure.columnsNum + '%';
  }

  logForm(): void {
    console.log(this.formGroup.value);
  }
}
