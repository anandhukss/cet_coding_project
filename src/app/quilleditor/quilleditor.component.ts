import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';
import "quill-mention";
@Component({
  selector: 'app-quilleditor',
  templateUrl: './quilleditor.component.html',
  styleUrls: ['./quilleditor.component.css']
})
export class QuilleditorComponent implements OnInit {
  public color: String = "";
  public htmlData: String;
  public bgImage;
  constructor(private shareData: ShareDataService) { }
  loadFile(event) {
    this.bgImage = document.getElementById('output-page');
    this.bgImage.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.htmlData = event['editor']['root']['innerHTML'];
    // this.shareData.setData(this.color,this.htmlData);
  }

  callApi() {
    this.shareData.connectApi().subscribe((result) => {
       console.log(result['values']);
      
    })
    
  }

  ngOnInit(): void {
  }

  @ViewChild(QuillEditorComponent, { static: true }) editor: QuillEditorComponent
  content = ''
  matContent = ''

  modules = {
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      onSelect: (item, insertItem) => {
        const editor = this.editor.quillEditor
        insertItem(item)
        // necessary because quill-mention triggers changes as 'api' instead of 'user'
        editor.insertText(editor.getLength() - 1, '', 'user')
      },

      source: (searchTerm, renderList) => {

        this.shareData.connectApi().subscribe((response) => {
          const values = response['values'];
          console.log("values: " + values)
          if (searchTerm.length === 0) {
            renderList(values, searchTerm)
          } else {
            const matches = []

            values.forEach((entry) => {
              if (entry.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                matches.push(entry)
              }
            })
            renderList(matches, searchTerm)
          }




        })
      },


    },

  }





}
