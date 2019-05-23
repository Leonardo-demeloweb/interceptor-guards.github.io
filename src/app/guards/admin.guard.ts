import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { HttpClient } from "@angular/common/http";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log("guard", this.auth.checkAdmin());
    if (this.auth.checkAdmin()) {
      console.log("The guard is working");
      return true;
    }
    this.router.navigate(["/page-unauthorized"]);
    return false;
  }
}
