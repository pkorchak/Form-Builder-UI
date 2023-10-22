import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public post(url: string, body: unknown, params?: HttpParams): Observable<unknown> {
    return this.handleResponse(this.http.post(url, body, { headers: this.buildHeaders(), ...params }));
  }

  public get(url: string, params?: HttpParams): Observable<unknown> {
    return this.handleResponse(this.http.get(url, { headers: this.buildHeaders(), ...params }));
  }

  public patch(url: string, body: unknown, params?: HttpParams): Observable<unknown> {
    return this.handleResponse(this.http.patch(url, body, { headers: this.buildHeaders(), ...params }));
  }

  private handleResponse(response: Observable<unknown>): Observable<unknown> {
    return response.pipe(catchError(err => this.catchError(err)));
  }

  private catchError(error: HttpErrorResponse): Observable<void> {
    if (error.status === 401) {
      this.router.navigateByUrl('/login');
    }
    // TODO Show notification with error text for the user
    throw new Error(`${ error.statusText }\n${ error.message }`);
  }

  private buildHeaders() {
    const headers = {};
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = token;

    return headers;
  }
}
