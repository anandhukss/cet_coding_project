import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    QuilleditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
    ColorPickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
