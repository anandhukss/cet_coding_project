import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuilleditorComponent } from './quilleditor/quilleditor.component';

const routes: Routes = [
  {path:'',component:QuilleditorComponent},
  {path:"editor",component:QuilleditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
