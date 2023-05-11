import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormStructure } from '@model/form-structure';
import { FormStructureMapper } from '@services/form-structure-mapper';

@Component({
  selector: 'app-pre-built-form',
  templateUrl: 'pre-built-form.component.html',
  styleUrls: ['../../styles/modules/_buttons.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreBuiltFormComponent implements OnInit {

  @Input() formStructureJson: FormStructure;

  formStructure: FormStructure;
  isInEditor = false;

  constructor(private formStructureMapper: FormStructureMapper) {
  }

  ngOnInit(): void {
    this.formStructure = this.formStructureMapper.map(this.formStructureJson);
  }

  onShowFormPreviewClick(newFormStructure: FormStructure): void {
    this.formStructure = this.formStructureMapper.map(newFormStructure);
    this.isInEditor = false;
  }
}
