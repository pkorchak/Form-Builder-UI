import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<label nz-checkbox
                    style="margin-right: 8px"
                    nzDisabled="true">
  </label>`
})
export class CheckboxMockupComponent {
}
