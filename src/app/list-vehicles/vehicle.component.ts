import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../common/Vehicle';
import { VehicleResponse } from '../common/VehicleResponse';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { Subscription } from 'rxjs';
import { Marker } from '../here-map/Marker';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {


  @Output() newMarkersEvent = new EventEmitter<Marker[]>();

  vehicleResponse!: VehicleResponse;
  currentIndex = -1;
  page: number = 1;
  pageSize: number = 9;
  count: number = 0;
  markers:Marker[]=[];

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.retrieveVehicles();
  }

  retrieveVehicles(): void {
    this.service.getVehicles(this.page, this.pageSize).subscribe(value => {
      this.vehicleResponse = value;
      this.vehicleResponse.content.forEach(vehicle => {
        vehicle.lat = Math.random() * (53.539 - 53.439) + 53.439;
        vehicle.lng = Math.random() * (-2.321 - -2.221) + -2.221;
      });
      this.count = this.vehicleResponse.totalElements;
      this.setMarkers(this.vehicleResponse.content);
      this.newMarkersEvent.emit(this.markers);
    },
      (error: AppError) => {
        if (error instanceof BadInputError) alert(error.originalError);
        else throw error;
      }
    );
  }

  update(vehicle: Vehicle) {
    this.service.updateVehicle(vehicle).subscribe(response => {
      let index = this.vehicleResponse.content.indexOf(vehicle);
      this.vehicleResponse.content.splice(index, 0, vehicle);
      this.setMarkers(this.vehicleResponse.content);
      this.newMarkersEvent.emit(this.markers);
    },
      (error: AppError) => {
        if (error instanceof BadInputError) alert(error.originalError);
        else throw error;
      });
  }

  delete(vehicle: Vehicle) {
    if (confirm("Are you sure to delete " + vehicle.license)) {
      this.service.deleteVehicle(vehicle.id).subscribe(response => {
        let index = this.vehicleResponse.content.indexOf(vehicle);
        this.vehicleResponse.content.splice(index, 1);
        this.setMarkers(this.vehicleResponse.content);
        this.newMarkersEvent.emit(this.markers);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) alert(error.originalError);
          else throw error;
        });
    }
  }

  handlePageChange(event: number) {
    this.page = event;
    this.retrieveVehicles();
  }

  
  private setMarkers(vehicles:Vehicle[]){
    this.markers=[];
    let marker:Marker;
    vehicles.forEach(vehicle => {
      let data ='<div style="font-size:14px;"><p>{</br>license: ' +vehicle.license+' </br>device: '+vehicle.device+'</br>capacity: '+
      vehicle.capacity+'</br>type: '+vehicle.type+'</br>}</p></div>';
      let icon='';
      if(vehicle.type=="CAR" || vehicle.type==null){
        icon='https://img.icons8.com/ios/48/000000/car--v1.png';
      }
      else{
        icon='https://img.icons8.com/material-outlined/48/000000/truck.png';
      }
      marker=new Marker(vehicle.lat,vehicle.lng,data,icon);
      this.markers.splice(0,0,marker);
      });
  }
}
