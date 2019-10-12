import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }
  getAllfod(): Observable<any>{
    return this.http.get('http://localhost:8082/food');
  }
}
