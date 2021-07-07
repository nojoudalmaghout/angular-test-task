import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../common/Vehicle';
import { VehicleResponse } from '../common/VehicleResponse';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BadInputError } from '../common/bad-input-error';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url="https://jms.safee.xyz/api/vehicles";

  private header = new HttpHeaders().set(
    "Authorization",
     "Basic dXNlcjoxMjNxd2U="
    ).append("Content-Type", "application/json");

  constructor(private http: HttpClient) { 
  }

  getVehicles(page:number,size:number){
    return this.http.get<VehicleResponse>(this.url+"?page="+page+"&size="+size,{headers:this.header}).pipe(
      catchError((error:Response)=>{
        if(error.status===400) return throwError(new BadInputError(error.json()));
        return throwError(new AppError(error.json()));
      }));;
  }

  addVehicle(vehicle: Vehicle){
    return this.http.post<Vehicle>(this.url,JSON.stringify(vehicle),{headers:this.header}).pipe(
      catchError((error:Response)=>{
        if(error.status===400) throwError(new BadInputError(error.json()));
        return throwError(new AppError(error.json()));
      }));
  }

  updateVehicle(vehicle:Vehicle){
    return this.http.put<Vehicle>(this.url+"/"+vehicle.id,JSON.stringify(vehicle),{headers:this.header}).pipe(
      catchError((error:Response)=>{
        if(error.status===400) return throwError(new BadInputError(error.json()));
        return throwError(new AppError(error.json()));
      }));
  }

  deleteVehicle(vehicleId :number){
    return this.http.delete(this.url+"/"+vehicleId,{headers:this.header}).pipe(
      catchError((error:Response)=>{
        if(error.status===400) return throwError(new BadInputError(error.json()));
        if(error.status===404) return throwError(new NotFoundError(error.json()));
        return throwError(new AppError(error.json()));
      }));
  }
}
