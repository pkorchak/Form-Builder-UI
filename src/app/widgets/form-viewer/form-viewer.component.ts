import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormStructure } from './model/form-structure';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormViewerComponent implements OnInit {

  @Input() formStructure: FormStructure;

  formGroup = new FormGroup({});

  ngOnInit(): void {
    this.formStructure.elements.forEach(element =>
      this.formGroup.addControl(
        element.name,
        new FormControl(null, element.required ? Validators.required : null)));
  }

  logForm(): void {
    console.log(this.formGroup.value);
  }
}
