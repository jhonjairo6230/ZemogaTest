import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../constants';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class MainService {

public mainUrl = 'https://q45vkzo8td.execute-api.us-east-1.amazonaws.com/dev/profile/';

  constructor(private http: HttpClient) { }


  async getProfileInfo(id:String):Promise<any> {
     return await this.http.get<any>(`${this.mainUrl}${id}`).toPromise();
  }

  async getAllProfiles():Promise<any> {
    return await this.http.get<any>(`${this.mainUrl}`).toPromise();
 }
}
