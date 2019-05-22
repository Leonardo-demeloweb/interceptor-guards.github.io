import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  users: any = {};
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.authentication();
  }

  public authentication() {
    this.http.get<any>("https://api.myjson.com/bins/1gry7w").subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log(this.users.id_token);
      localStorage.setItem("token", this.users.id_token);
      sessionStorage.setItem("customerId", this.users.id);

      console.log(localStorage.getItem("token"));
      console.log(sessionStorage.getItem("customerId"));
    });
  }
  teste() {
    this.http.get<any>("https://api.myjson.com/bins/1gry7w").subscribe(data => {
      console.log(data);
    });
  }
}
