import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from '../common/Vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Vehicle>();
  
  @Input()
    vehicle!: Vehicle;
  closeResult = '';

  form = new FormGroup({
    license: new FormControl('', ),
    device: new FormControl('', ),
    capacity: new FormControl('', ),
    type: new FormControl('', )
  });

  constructor(private modalService: NgbModal) { }

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

  ngOnInit(): void {
  }

  submit(){
    let updatedVehicle:Vehicle = this.form.value;
    updatedVehicle.id=this.vehicle.id;
    updatedVehicle.lat=this.vehicle.lat;
    updatedVehicle.lng=this.vehicle.lng;
    this.newItemEvent.emit(updatedVehicle);
    this.modalService.dismissAll("");
  }

}
