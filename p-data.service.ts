import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PDataService {

  constructor(private http:HttpClient) { 

  }
  
  getProduct(){
    return this.http.get("https://dummyjson.com/products/1").pipe(map((res:any)=>{
      return res;
    }));

  }
}
