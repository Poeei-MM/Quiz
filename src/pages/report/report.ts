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
  tques1 : any[];
  tques2 : any[];
  tques3 : any[];
  tques4 : any[];
  tques5 : any[];
  tques6 : any[];
  tques7 : any[];
  tques8 : any[];
  tques9 : any[];
  tques10 : any[];
    
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
		
		db.executeSql('SELECT ques1,count(*) AS count1 FROM result GROUP BY ques1', [])
		.then(res => {
		  this.tques1 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques1.push({tf:res.rows.item(i).ques1,count:res.rows.item(i).count1})
		  }
		  alert(JSON.stringify(this.tques1));
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques2,count(*) AS count FROM result GROUP BY ques2', [])
		.then(res => {
		  this.tques2 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques2.push({tf:res.rows.item(i).ques2,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques3,count(*) AS count FROM result GROUP BY ques3', [])
		.then(res => {
		  this.tques3 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques3.push({tf:res.rows.item(i).ques3,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques4,count(*) AS count FROM result GROUP BY ques4', [])
		.then(res => {
		  this.tques4 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques4.push({tf:res.rows.item(i).ques4,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques5,count(*) AS count FROM result GROUP BY ques5', [])
		.then(res => {
		  this.tques5 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques5.push({tf:res.rows.item(i).ques5,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques6,count(*) AS count FROM result GROUP BY ques6', [])
		.then(res => {
		  this.tques6 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques6.push({tf:res.rows.item(i).ques6,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques7,count(*) AS count FROM result GROUP BY ques7', [])
		.then(res => {
		  this.tques7 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques7.push({tf:res.rows.item(i).ques7,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques8,count(*) AS count FROM result GROUP BY ques8', [])
		.then(res => {
		  this.tques8 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques8.push({tf:res.rows.item(i).ques8,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques9,count(*) AS count FROM result GROUP BY ques9', [])
		.then(res => {
		  this.tques9 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques9.push({tf:res.rows.item(i).ques9,count:res.rows.item(i).count})
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques10,count(*) AS count FROM result GROUP BY ques10', [])
		.then(res => {
		  this.tques10 = [];
		  for(var i=0; i<res.rows.length; i++) {
			this.tques10.push({tf:res.rows.item(i).ques10,count:res.rows.item(i).count})
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
