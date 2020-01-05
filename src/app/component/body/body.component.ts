import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { videodetails } from '../../interface/videodetail';

// import { from } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as data from './../../../assets/json/./dummy.json';
// streaming\src\assets\json\dummy.json
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  // videoDetail: videodetails;
  // imgSrc: SafeResourceUrl;
  // youtubePath:SafeResourceUrl;
  // youtubeLink:string="https://www.youtube.com/";

  public videoDetails: any = (data as any).default;
  public chkupdte: boolean = true;
  public isexist: boolean = true;
  public cond: string = "any";
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    // console.log(data);
  }
  getImage(imgUrl: any) {
    return ("https://img.youtube.com/vi/" + imgUrl + "/hqdefault.jpg");
  }
  update() {
    this.chkupdte = false;
  }
  delete(vdoUrl: any, title: any) {
  }
  setFlag(val: any) {
    val === "Marriage" ? this.cond = "Marriage" : val === "Funeral" ? this.cond = "Funeral" : val === "Events" ? this.cond = "Events" : val === "Functions" ? this.cond = "Functions" : null;
  }

}
