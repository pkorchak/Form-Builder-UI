import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  @Output() signedIn = new EventEmitter();

  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit() {
    // TODO Add login by email
    /*this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });*/
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user && user.idToken != localStorage.getItem('token')) {
        localStorage.setItem('token', user.idToken);
        this.signedIn.emit();
      }
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
    localStorage.removeItem('token');
  }
}
