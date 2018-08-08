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
  currentuser: any = [];
  myscore : any;
  total : any;
  queans : any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite ) {
	this.myscore = this.navParams.get('score');
	this.queans = this.navParams.get('queans');
    //alert(JSON.stringify(this.queans));
    this.queans.sort((a, b) => {
		if (a.id < b.id) return -1;
		else if (a.id > b.id) return 1;
		else return 0;
	  });
	alert(JSON.stringify(this.queans));
  }
  ionViewDidLoad() {
	  this.getData();
	  
  }

  getData() {
	  this.sqlite.create({
		name: 'ionicdb.db',
		location: 'default'
	  }).then((db: SQLiteObject) => {
		db.executeSql('INSERT INTO user VALUES(NULL,?,?,?)',[localStorage.getItem('name'),localStorage.getItem('phone'),this.myscore])
        .then(res => {
          console.log(res);
          localStorage.clear();
        })
        .catch(e => {
          console.log(e);
        });
        
        db.executeSql('INSERT INTO result VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?)',[localStorage.getItem('name'),this.queans[0].qa,this.queans[1].qa,this.queans[2].qa,this.queans[3].qa,this.queans[4].qa,this.queans[5].qa,this.queans[6].qa,this.queans[7].qa,this.queans[8].qa,this.queans[9].qa])
        .then(res => {
          console.log(res);
          localStorage.clear();
        })
        .catch(e => {
          console.log(e);
        });
        
		db.executeSql('SELECT * FROM user ORDER BY rowid DESC', [])
		.then(res => {
		  this.users = [];
		  //alert(JSON.stringify(res.rows));
		  this.total = res.rows.length;
		  for(var i=0; i<res.rows.length; i++) {
			this.users.push({rowid:res.rows.item(i).rowid,name:res.rows.item(i).name,phone:res.rows.item(i).phone,score:res.rows.item(i).score})
		  }
		})
		.catch(e => console.log(e));
				
	  })
	}
	
	quit() {
		this.navCtrl.setRoot('HomePage');
	}
	
	report() {
		this.navCtrl.setRoot('ReportPage');
	}
}
