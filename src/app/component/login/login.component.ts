import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from './../../service/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public shown: boolean;
  public username: string;
  public Errormsg: string = "";
  public imgsrc = "../../../assets/img/logo-admin.jpg";

  constructor(private route: Router, private interaction: InteractionService) { }
  loginuser(value) {
    // console.log(value.email);
    if (!value.email || !value.password) {
      this.shown = true;
      this.Errormsg = "Invalid Credentials"
    } else {
      this.route.navigate(["/home"]);
      this.shown = false;
      this.username = value.email;
      this.interaction.userassign(value.email);
    }

  }
  ngOnInit() {
  }

}
