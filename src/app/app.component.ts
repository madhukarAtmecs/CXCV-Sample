import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 constructor(private router:Router){

 }
  title = 'CXCV';
  isLoginPage = false;
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd) {
      this.isLoginPage = this.router.url.includes('login');
      }   
        console.log(this.router.url.toString());
      });
   
  }
}
