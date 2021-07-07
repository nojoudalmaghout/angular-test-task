import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '../common/Vehicle';

@Component({
  selector: 'add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})

export class AddComponentComponent implements OnInit {
  form = new FormGroup({
    license: new FormControl('', [Validators.required]),
    device: new FormControl('', [Validators.required]),
    capacity: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    let vehicle =new Vehicle(0,this.f.license.value,this.f.device.value,this.f.capacit.value,this.f.type.value);

    console.log(this.form.value);
  }
  constructor(private service VehicleService) { }

  ngOnInit(): void {
  }

}
