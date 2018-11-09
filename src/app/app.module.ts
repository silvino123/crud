import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// FIRESTORE
import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { ProductsComponent } from './components/products/products.component';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IndexPage} from '../pages/index/index';
import { ProductService } from "../app/services/product.service";
var config = {
  apiKey: "AIzaSyB3AtD5XzXdHhAOVJtoh-QKqeiP_ke0PgM",
  authDomain: "crud-fad55.firebaseapp.com",
  databaseURL: "https://crud-fad55.firebaseio.com",
  projectId: "crud-fad55",
  storageBucket: "crud-fad55.appspot.com",
  messagingSenderId: "865204847170"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
