import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-settings-drawer',
  templateUrl: './settings-drawer.component.html',
  styleUrls: ['./settings-drawer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDrawerComponent {

  visible = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.visible && !this.el.nativeElement.contains(event.target)) {
      this.visible = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.visible && (event.key === 'Escape' || event.keyCode === ESCAPE)) {
      this.visible = false;
    }
  }
}
