import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }
 
  getAllfod(): Observable<any> {
    return this.http.get('http://localhost:8082/food');
  }
  
  saveOrder(order) {
       return this.http.post('http://localhost:8082/order/save' , order);
  }
 
  getAllEmp(): Observable<any> {
    return this.http.get('http://localhost:8082/emp');
  }
  
  getAllEvents(): Observable<any> {
    return this.http.get('http://localhost:8082/events');
  }

  saveBooking(booking) {
    return this.http.post('http://localhost:8082/host/save' , booking);
}

}
