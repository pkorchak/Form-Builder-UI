import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IdentityProvider, RegisterUserRqDto } from '@model/dto/rq/register-user-rq-dto';
import { RegisterUserRsDto } from '@model/dto/rs/register-user-rs-dto';
import { UsersHttpService } from '@services/api/users-http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  @Output() signedIn = new EventEmitter();

  private destroyRef = inject(DestroyRef);

  constructor(
    private socialAuthService: SocialAuthService,
    private usersHttpService: UsersHttpService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // TODO Add login by email
    /*this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });*/
    this.socialAuthService.authState
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user: SocialUser) => {
        if (user && user.idToken != localStorage.getItem('token')) {
          localStorage.setItem('token', user.idToken);

          this.usersHttpService.register({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            photoUrl: user.photoUrl,
            provider: user.provider as IdentityProvider
          } as RegisterUserRqDto)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((rs: RegisterUserRsDto) => {
              localStorage.setItem('userId', rs.id || '');
              this.signedIn.emit();

              if (this.route.snapshot.url.toString().includes('login')) {
                this.router.navigateByUrl('/');
              }
            });
        }
      });
  }

  signOut(): void {
    this.socialAuthService.signOut()
      .then(() => localStorage.removeItem('token'));
  }
}
