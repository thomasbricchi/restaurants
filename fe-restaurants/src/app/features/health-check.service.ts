import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, retryWhen, take, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  private resourceUrl = '/api/health-check';

  constructor(private readonly http: HttpClient, private spinner: NgxSpinnerService) {
  }

  healthCheck(): Observable<void> {
    return this.http.get<void>(this.resourceUrl);
  }

  beIsUp(): Observable<boolean> {
    this.spinner.show();
    return this.healthCheck().pipe(
      retryWhen((err) => err.pipe(delay(3000), take(20))),
      tap(() => this.spinner.hide()),
      map(() => true),
      catchError((e) => {
        alert('Be is still down');
        this.spinner.hide();
        throw(e);
      }));
  }

}
