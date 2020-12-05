import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from './features/health-check.service';
import { Observable } from 'rxjs';
import { catchError, delay, map, retryWhen, take, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showApp$: Observable<boolean>;

  constructor(private healthService: HealthCheckService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.showApp$ = this.healthService.healthCheck().pipe(
      retryWhen((err) => err.pipe(delay(3000), take(10))),
      tap(() => this.spinner.hide()),
      map(() => true),
      catchError((e) => {
          alert('Be is still down');
          throw(e);
        }
      ))
    ;

  }

}
