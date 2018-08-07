import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  application ="Farmerphone";
  btnDisable = false;
  model = {
    left: true,
    middle: false,
    right: false
  };

  message(value){

  	console.log(value);
  }

  ngOnInit(){
  	this.message(this.title);
  }
}