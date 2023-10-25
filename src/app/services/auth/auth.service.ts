import { Injectable } from '@angular/core';
import { EnvironmentService } from "../environment/environment.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs";
import {IUser} from "../../../entities/types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;

  constructor(private environment: EnvironmentService, private http: HttpClient, private router: Router) {
    this.baseUrl = environment.getApiUrl()
  }

  public login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, {email, password}).pipe(map((res) => {
      res.token ? localStorage.setItem('auth-token', res.token) : null;
      (localStorage.getItem('auth-token') !== null) ? this.router.navigate(['main']) : null;
    }))
  }

  public logout() {
    localStorage.removeItem('auth-token');
    void this.router.navigate(['auth']);
  }

  public get getToken(): string | null {
    return localStorage.getItem('auth-token')
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  public get getUserInfo(): IUser | null {
    const token = this.getToken;
    if (token) {
      return this.parseJwt(token)
    }
    return null
  }

}
