import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Subject } from "rxjs/Subject";
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage implements OnInit {
  report : any[];
  dtOptions: DataTables.Settings = {};
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite ) {
	this.sqlite.create({
		name: 'ionicdb.db',
		location: 'default'
	  }).then((db: SQLiteObject) => {
		db.executeSql('SELECT * FROM result ORDER BY rowid DESC', [])
		.then(res => {
		  this.report = [];
		  //alert(JSON.stringify(res.rows));
		  for(var i=0; i<res.rows.length; i++) {
			this.report.push({rowid:res.rows.item(i).rowid,username:res.rows.item(i).username,ques1:res.rows.item(i).ques1,ques2:res.rows.item(i).ques2,ques3:res.rows.item(i).ques3,ques4:res.rows.item(i).ques4,ques5:res.rows.item(i).ques5,ques6:res.rows.item(i).ques6,ques7:res.rows.item(i).ques7,ques8:res.rows.item(i).ques8,ques9:res.rows.item(i).ques9,ques10:res.rows.item(i).ques10})
		  }
		})
		.catch(e => console.log(e));
	  })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  ngOnInit():void {
    this.dtOptions = {
     pagingType: 'full_numbers',
      pageLength: 12,
      }
  }

}
