import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './services/vehicle.service';
import {HttpClientModule} from '@angular/common/http';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { DataTablesModule } from 'angular-datatables';
import { HereMapComponent } from './here-map/here-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    HereMapComponent,
    AddVehicleComponent,
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    VehicleService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
