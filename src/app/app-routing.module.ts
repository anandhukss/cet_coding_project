import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutputComponent } from './output/output.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';

const routes: Routes = [
  {path:'',component:QuilleditorComponent},
  {path:"output",component:OutputComponent},
  {path:"editor",component:QuilleditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
