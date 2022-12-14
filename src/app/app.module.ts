import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// import "rxjs/add/operator/map";
import {map} from 'rxjs/operators';


import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
 
@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private _http:HttpClient){}

  piedata(){
    return this._http.get("http://localhost:5000/todos")
    map((result: any) => result);
  }
}      