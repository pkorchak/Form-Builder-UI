import { Component, Input, OnInit } from '@angular/core';
import { FormStructure } from '@model/form-structure';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.less', '../../styles/modules/_form-block.less']
})
export class FormEditorComponent implements OnInit {

  @Input() formStructure: FormStructure;

  ngOnInit() {
  }

}
