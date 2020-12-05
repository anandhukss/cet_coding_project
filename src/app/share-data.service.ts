import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
color:String;
htmlData:String;
public url="https://tblgi4jzc6.execute-api.ap-south-1.amazonaws.com/latest/hello";
  constructor(private http:HttpClient) { }
  setData(color,htmlData){
    this.color=color;
    this.htmlData=htmlData;
  }
  getData(){
    return {
      "color":this.color,
      "html":this.htmlData
    }

  }

  connectApi(){
    return this.http.get(this.url)
  }
}
