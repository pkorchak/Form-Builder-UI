import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { FormCreateRqDto } from '@model/dto/rq/form-create-rq-dto';
import { FormCreateRsDto } from '@model/dto/rs/form-create-rs-dto';

@Injectable({ providedIn: 'root' })
export class FormsHttpService extends HttpService {

  public create(user: FormCreateRqDto): Observable<FormCreateRsDto> {
    return this.post('/api/forms', user) as Observable<FormCreateRsDto>;
  }
}
