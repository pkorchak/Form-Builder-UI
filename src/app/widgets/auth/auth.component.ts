import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IdentityProvider, RegisterUserRqDto } from '@model/dto/rq/register-user-rq-dto';
import { RegisterUserRsDto } from '@model/dto/rs/register-user-rs-dto';
import { UsersHttpService } from '@services/api/users-http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  @Output() signedIn = new EventEmitter();

  constructor(
    private socialAuthService: SocialAuthService,
    private usersHttpService: UsersHttpService) {
  }

  ngOnInit() {
    // TODO Add login by email
    /*this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });*/
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user && user.idToken != localStorage.getItem('token')) {
        localStorage.setItem('token', user.idToken);

        this.usersHttpService.register({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          photoUrl: user.photoUrl,
          provider: user.provider as IdentityProvider
        } as RegisterUserRqDto)
          .subscribe((rs: RegisterUserRsDto) => {
            localStorage.setItem('userId', rs.id || '');
            this.signedIn.emit();
          });
      }
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
    localStorage.removeItem('token');
  }
}
