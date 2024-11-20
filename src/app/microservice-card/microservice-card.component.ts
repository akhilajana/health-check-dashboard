import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-microservice-card',
  templateUrl: './microservice-card.component.html',
  styleUrls: ['./microservice-card.component.css']
})
export class MicroserviceCardComponent {
  @Input() microserviceData: any;
  @Input() microserviceName: any;

}