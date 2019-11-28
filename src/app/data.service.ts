import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService
 {

  constructor(private http:HttpClient) 
  { 

  }
  Select()
  {
    return this.http.get("http://localhost:9898/emps");
  }
}
