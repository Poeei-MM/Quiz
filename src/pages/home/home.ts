import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = { name:"", phone:"", score:0 };
  
  constructor(public navCtrl: NavController, private sqlite: SQLite,
    private toast: Toast) {

  }

}
