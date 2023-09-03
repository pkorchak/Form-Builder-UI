import { Injectable } from '@angular/core';
import { RegisterUserRqDto } from '@model/dto/rq/register-user-rq-dto';
import { RegisterUserRsDto } from '@model/dto/rs/register-user-rs-dto';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class UsersHttpService extends HttpService {

  public register(user: RegisterUserRqDto): Observable<RegisterUserRsDto> {
    return this.post('/api/users/register', user) as Observable<RegisterUserRsDto>;
  }
}
