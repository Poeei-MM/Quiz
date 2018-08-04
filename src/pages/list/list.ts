import { Component } from '@angular/core';
import { NavController, NavParams , IonicPage } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  users: any = [];
  myscore : any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite ) {
	this.myscore = this.navParams.get('score');
    alert(this.myscore);
  }
  ionViewDidLoad() {
	  this.getData();
  }

  getData() {
	  this.sqlite.create({
		name: 'ionicdb.db',
		location: 'default'
	  }).then((db: SQLiteObject) => {
		db.executeSql('SELECT * FROM user ORDER BY rowid DESC', [])
		.then(res => {
		  this.users = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.users.push({rowid:res.rows.item(i).rowid,name:res.rows.item(i).name,phone:res.rows.item(i).phone,score:res.rows.item(i).score})
		  }
		})
		.catch(e => console.log(e));
	  })
	}
}
