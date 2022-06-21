import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css'],
})
export class SearchCarsComponent implements OnInit {
  cars!: any[];
  parts!: any[];
  selectedCar!: number;
  selectedParts!: number;
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.service.getCars().subscribe(data => {
      this.cars =  data;

   });
   this.service.getParts().subscribe(data => {
    this.parts =  data;

 });

  }

  sendCars(){
    this.service.sendCar(this.selectedCar);
  }
  sendParts(){
    this.service.sendPart(this.selectedParts);
  }


}
