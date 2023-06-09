import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AuthComponent } from '@widgets/auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isSignedIn = false;
  isSigningIn = false;

  @ViewChild(AuthComponent) signIn: AuthComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isSignedIn = !!localStorage.getItem('token');
  }

  onSignedIn(): void {
    this.isSignedIn = true;
    this.isSigningIn = false;
  }

  signOut(): void {
    this.isSignedIn = false;
    this.isSigningIn = true;
    this.cdr.detectChanges();
    this.signIn.signOut();
  }
}
