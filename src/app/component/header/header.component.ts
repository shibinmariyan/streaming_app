import { Component, OnInit } from '@angular/core';
import { InteractionService } from './../../service/interaction.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user_name: any;
  public ves: any;
  public adminpath: any;
  public adminName: any;
  public imgpath: any;
  constructor(private interaction: InteractionService) {

  }
  ngOnInit() {
    this.user_name = (this.interaction.user_name === "" || this.interaction.user_name === null || this.interaction.user_name === undefined) ? "Admin User" : this.interaction.user_name.split("@",2)[0];
    console.log(this.user_name[0])
    this.imgpath = (this.interaction.user_path === "" || this.interaction.user_path === null || this.interaction.user_path === undefined) ? "Admin User" : this.interaction.user_path;
    this.adminpath = (this.interaction.user_adminpath === "" || this.interaction.user_adminpath === null || this.interaction.user_adminpath === undefined) ? "" : this.interaction.user_adminpath;
    this.adminName = (this.interaction.user_adminName === "" || this.interaction.user_adminName === null || this.interaction.user_adminName === undefined) ? "Admin User" : this.interaction.user_adminName;
    console.log("ass",this.interaction.user_name);
  }
  LogOut() {
    this.interaction.removeUser()
  }
}