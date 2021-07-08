import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../common/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})


export class AddVehicleComponent {

  @Output() newVehicleEvent = new EventEmitter<Vehicle>();

  closeResult = '';
  form = new FormGroup({
    license: new FormControl('', [Validators.required]),
    device: new FormControl('', [Validators.required]),
    capacity: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });
  
  constructor(private service:VehicleService,private modalService: NgbModal) { }
  
  open(content: any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    let vehicle:Vehicle =this.addVehicle(this.form.value);
    this.newVehicleEvent.emit(vehicle);
    this.modalService.dismissAll("");
  }

  addVehicle(vehicle:Vehicle){
    this.service.addVehicle(vehicle).subscribe(response =>{
        vehicle = response;
        vehicle.lat=Math.random() * (53.539 - 53.439) + 53.439;
        vehicle.lng=Math.random() * (-2.321 - -2.221) + -2.221;
    },
    (error:AppError)=>{
      if(error instanceof BadInputError) alert(error.originalError);
      else throw error;
    });
    return vehicle;
  }

}
