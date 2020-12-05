import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from './features/health-check.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showApp$: Observable<boolean>;

  constructor(private healthService: HealthCheckService) {
  }

  ngOnInit(): void {
    this.showApp$ = this.healthService.beIsUp();
  }

}
