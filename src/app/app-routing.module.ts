import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {GalleryComponent} from "./gallery/gallery.component";
import {HomePageComponent} from "./homepage/homepage.component";

const routes: Routes=[
  {path: '', redirectTo: '/homepage', pathMatch:'full'},
  {path:'homepage', component:HomePageComponent},
  {path:'gallery', component:GalleryComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})



export class AppRoutingModule { }
