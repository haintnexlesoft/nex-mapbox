import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private translate: TranslateService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.httpClient.get('http://nex-api.herokuapp.com/users').subscribe((res)=>{
      console.log(res);
    });
  }

}
