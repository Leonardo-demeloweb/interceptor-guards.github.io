import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log("guard", this.auth.checkLogin());
    if (this.auth.checkLogin()) {
      console.log("The guard is working");
      return true;
    }
    this.router.navigate(["/page-unauthorized"]);
    return false;
  }
}
