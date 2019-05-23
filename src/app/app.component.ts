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
    this.http.get<any>("https://api.myjson.com/bins/zm2mg").subscribe(data => {
      this.users = data;
      console.log(this.users);
      console.log(this.users.id_token);
      console.log(this.users.role);
      localStorage.setItem("token", this.users.id_token);
      localStorage.setItem("role", this.users.role);

      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("role"));
    });
  }
  teste() {
    this.http.get<any>("https://api.myjson.com/bins/1gry7w").subscribe(data => {
      console.log(data);
    });
  }
}
