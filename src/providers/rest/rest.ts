import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {
 
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
   
  }

  getData(){
    return this.http.get("./assets/data/data.json")
      .map((res:any) => res.json());
  }
  
}
