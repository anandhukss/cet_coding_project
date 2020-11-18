import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
color:String;
htmlData:String;
  constructor() { }
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
}
