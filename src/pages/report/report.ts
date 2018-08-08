import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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
export class ReportPage {
  report : any[];
  
  tq1 : any;
  fq1 : any;
  tq2 : any;
  fq2 : any;
  tq3 : any;
  fq3 : any;
  tq4 : any;
  fq4 : any;
  tq5 : any;
  fq5 : any;
  tq6 : any;
  fq6 : any;
  tq7 : any;
  fq7 : any;
  tq8 : any;
  fq8 : any;
  tq9 : any;
  fq9 : any;
  tq10 : any;
  fq10 : any;
 
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
		
		db.executeSql('SELECT ques1,count(*) AS count FROM result GROUP BY ques1', [])
		.then(res => {
		  
		  for(var i=0; i<res.rows.length; i++) {
			if(res.rows.item(i).ques1 === 'true') {
				this.tq1 = res.rows.item(i).count;
				
			}
			else {
				this.fq1 = res.rows.item(i).count;
				
			}
		  }
		  
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques2,count(*) AS count FROM result GROUP BY ques2', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques2 === 'true') {
				this.tq2 = res.rows.item(i).count;
				
			}
			else {
				this.fq2 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques3,count(*) AS count FROM result GROUP BY ques3', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques3 === 'true') {
				this.tq3 = res.rows.item(i).count;
				
			}
			else {
				this.fq3 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques4,count(*) AS count FROM result GROUP BY ques4', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques4 === 'true') {
				this.tq4 = res.rows.item(i).count;
				
			}
			else {
				this.fq4 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques5,count(*) AS count FROM result GROUP BY ques5', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques5 === 'true') {
				this.tq5 = res.rows.item(i).count;
				
			}
			else {
				this.fq5 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques6,count(*) AS count FROM result GROUP BY ques6', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques6 === 'true') {
				this.tq6 = res.rows.item(i).count;
				
			}
			else {
				this.fq6 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques7,count(*) AS count FROM result GROUP BY ques7', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques7 === 'true') {
				this.tq7 = res.rows.item(i).count;
				
			}
			else {
				this.fq7 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques8,count(*) AS count FROM result GROUP BY ques8', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques8 === 'true') {
				this.tq8 = res.rows.item(i).count;
				
			}
			else {
				this.fq8 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques9,count(*) AS count FROM result GROUP BY ques9', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques9 === 'true') {
				this.tq9 = res.rows.item(i).count;
				
			}
			else {
				this.fq9 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		db.executeSql('SELECT ques10,count(*) AS count FROM result GROUP BY ques10', [])
		.then(res => {
		  for(var i=0; i<res.rows.length; i++) {
			
			if(res.rows.item(i).ques10 === 'true') {
				this.tq10 = res.rows.item(i).count;
				
			}
			else {
				this.fq10 = res.rows.item(i).count;
				
			}
		  }
		})
		.catch(e => console.log(e));
		
		
	  })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }
  
  quit() {
		this.navCtrl.setRoot('HomePage');
	}

}
