import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuth} from 'angularfire2/auth';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { WindowService } from './window.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {PhoneLoginComponent} from './phone-login/phone-login.component';



@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot()   
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
