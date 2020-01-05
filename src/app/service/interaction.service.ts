import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private UserMsgSrc = new Subject<string>();
  Username$ = this.UserMsgSrc.asObservable();
  public user_name: any;
  public user_path: any = "../../../assets/img/logo-admin.jpg";
  public user_adminpath: any = "../../../assets/img/adminlogo.png";
  public user_adminName: string = "Admin Panel";
  userassign(username) {
    localStorage.setItem("username", username);
    console.log(localStorage.getItem("username"));
  }
  constructor(private route: Router) {
    this.user_name = localStorage.getItem("username");
  }

  removeUser() {
    this.user_name = null;
    localStorage.removeItem('username');
    this.route.navigate(["**"]);
  }
}
