import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  constructor(private http: HttpClient) { }

  public getMeetups() {
    return this.http.get(`${environment.apiUrl}/meetup`)
  }
}
