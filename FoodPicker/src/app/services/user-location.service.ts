import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLocation } from '../interfaces/user-location';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserLocation(){
    return this.http.get<UserLocation>('http://api.ipapi.com/api/check?access_key=add6717ee60a90022156c83a98beb44e');
  }

}
