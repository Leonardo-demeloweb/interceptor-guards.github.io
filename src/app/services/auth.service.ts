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

  public setRole(role: string) {
    localStorage.setItem("role", role);
  }

  public getRole(): string {
    return localStorage.getItem("role");
  }

  checkLogin() {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != "" &&
      localStorage.getItem("role") === "user"
    ) {
      console.log(localStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }

  checkAdmin() {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != "" &&
      localStorage.getItem("role") === "admin"
    ) {
      console.log(localStorage.getItem("role"));
      return true;
    } else {
      return false;
    }
  }
}
