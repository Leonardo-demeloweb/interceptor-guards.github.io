import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}

  public setToken(token: string) {
    localStorage.setItem("token", token);
  }

  public getToken(): string {
    return localStorage.getItem("token");
  }

  public isAuthenticated(): void {
    const token = this.getToken();
  }

  checkLogin() {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != ""
    ) {
      console.log(localStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }
}
