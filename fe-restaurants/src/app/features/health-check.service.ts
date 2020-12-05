import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  private resourceUrl = '/api/health-check';

  constructor(private readonly http: HttpClient) {
  }

  healthCheck(): Observable<void> {
    return this.http.get<void>(this.resourceUrl);
  }
}
