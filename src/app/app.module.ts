import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MicroserviceCardComponent } from './microservice-card/microservice-card.component';
import { EnvironmentTableComponent } from './environment-table/environment-table.component';
import { DependentServicesComponent } from './dependent-services/dependent-services.component';
import { ObjectTransformPipePipe } from './object-transform-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MicroserviceCardComponent,
    EnvironmentTableComponent,
    DependentServicesComponent,
    ObjectTransformPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }