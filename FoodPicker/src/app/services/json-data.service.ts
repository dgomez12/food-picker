import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(
    private http: HttpClient
  ) { }

getCuisineTypes(){
  return this.http.get('../assets/JSONfiles/cuisine-types.json');
}

getDessertTypes(){
  return this.http.get('../assets/JSONfiles/dessert-types.json');
}

}
