import { Component, ElementRef, HostListener } from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-settings-drawer',
  templateUrl: './settings-drawer.component.html',
  styleUrls: ['./settings-drawer.component.less']
})
export class SettingsDrawerComponent {

  visible = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (this.visible && !this.el.nativeElement.contains(event.target)) {
      this.visible = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.visible && (event.key === 'Escape' || event.keyCode === ESCAPE)) {
      this.visible = false;
    }
  }
}
