import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from '../health-check.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  healthData: any;

  constructor(private healthCheckService: HealthCheckService) { }

  ngOnInit(): void {
    this.healthCheckService.getHealthCheckData().subscribe(
      data => {
        this.healthData = data;
      },
      error => {
        console.error('Error fetching health check data:', error);
      }
    );
  }
}