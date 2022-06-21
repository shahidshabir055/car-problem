import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  car = new Subject<any>();
  parts = new Subject<any>();
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //     console.log(data);
    // });
  }

  public getCars(): Observable<any> {
    return this.http.get('../../assets/Cars9096be5.json');
  }
  public getParts(): Observable<any> {
    return this.http.get('../../assets/ListOfAutoParts1aaa4e5.json');
  }
  getCar(): Observable<any>  {
    return this.car.asObservable();
  }
  sendCar(car: any) {
    this.car.next(car);
  }
  getPart(): Observable<any> {
    return this.parts.asObservable();
  }
  sendPart(parts: any) {
    this.parts.next(parts);
  }
}
