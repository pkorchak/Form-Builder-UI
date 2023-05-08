import { Component } from '@angular/core';

@Component({
  selector: 'app-form-container',
  template: `
    <ng-scrollbar>
      <div class="form-content">
        <ng-content></ng-content>
      </div>
    </ng-scrollbar>`,
  styleUrls: ['./form-container.component.less']
})
export class FormContainerComponent {
}
