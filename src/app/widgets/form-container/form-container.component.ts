import { Component } from '@angular/core';

@Component({
  selector: 'app-form-container',
  template: `
    <perfect-scrollbar>
      <div class="form-content">
        <ng-content></ng-content>
      </div>
    </perfect-scrollbar>`,
  styleUrls: ['./form-container.component.less']
})
export class FormContainerComponent {
}
