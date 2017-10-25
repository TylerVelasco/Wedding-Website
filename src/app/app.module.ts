import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScrollToModule} from 'ng2-scroll-to';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {NgsRevealModule} from 'ng-scrollreveal';
import { KonamiModule } from 'ngx-konami';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {ModalComponent} from "./modal/modal.component";
import {FormComponent} from "./form/form.component";
import {KonamiComponent} from "./konami/konami.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    FormComponent,
    KonamiComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgsRevealModule.forRoot(),
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    KonamiModule
  ],
  entryComponents:[ModalComponent, KonamiComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
