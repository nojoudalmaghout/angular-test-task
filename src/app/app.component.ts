import { Component } from '@angular/core';
import { Vehicle } from './common/Vehicle';
import { VehicleResponse } from './common/VehicleResponse';
import { Marker } from './here-map/Marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-task';
  public markers:Marker[] =[];
  public vehicleResponse:VehicleResponse =new VehicleResponse();

  public constructor() {
  }

  setMarkers($event:any){
    this.markers=$event;
  }

  addVehicle($event:any){
    this.vehicleResponse.content.push($event);
  }

}
