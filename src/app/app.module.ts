import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScrollToModule} from 'ng2-scroll-to';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {ParallaxComponent} from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParallaxComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
