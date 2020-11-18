import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
@Component({
  selector: 'app-quilleditor',
  templateUrl: './quilleditor.component.html',
  styleUrls: ['./quilleditor.component.css']
})
export class QuilleditorComponent implements OnInit {
public color:String="";
public htmlData:String;
public bgImage;
  constructor(private shareData:ShareDataService) { }
  loadFile(event) {
    this.bgImage = document.getElementById('output-page');
    this.bgImage.style.backgroundImage= "url("+URL.createObjectURL(event.target.files[0])+")";
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    this.htmlData=event['editor']['root']['innerHTML'];
    this.shareData.setData(this.color,this.htmlData);
  }


logData(){
  console.log(this.color);

}
 

  ngOnInit(): void {
  }

}
