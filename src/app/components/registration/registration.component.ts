import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private service: DataService) { }
  name ='';
  selectedCar!: any;
  selectedParts!: any;
  submitted:boolean=false;
  ngOnInit(): void {
    this.service.getCar().subscribe(data => {
      this.selectedCar=  data;

   });
   this.service.getPart().subscribe(data => {
    this.selectedParts=  data;

 });
    this.registerForm = this.formBuilder.group({
      fullName: ['',[Validators.required, Validators.maxLength(75), Validators.pattern('^[a-zA-Z \-\']+')]]
    })
  }
  showName(event: any){
    this.name = event.target.value;
  }
  onSubmit(){

  }
}


