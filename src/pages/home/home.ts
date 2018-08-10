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
  data = { name:"", phone:"", score: 0 };
  
  constructor(public navCtrl: NavController, private sqlite: SQLite,
    private toast: Toast) {

  }

  saveData() {
	localStorage.setItem('name', this.data.name);
	localStorage.setItem('phone', this.data.phone);
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
     db.executeSql('CREATE TABLE IF NOT EXISTS user(rowid INTEGER PRIMARY KEY, name TEXT, phone TEXT, score INT)', [])
		.then(res => console.log('Executed SQL'))
		.catch(e => console.log(e));
		this.navCtrl.push('QuizPage');
	 db.executeSql('CREATE TABLE IF NOT EXISTS result(rowid INTEGER PRIMARY KEY, username TEXT, ques1 BIT, ques2 BIT, ques3 BIT, ques4 BIT, ques5 BIT, ques6 BIT, ques7 BIT, ques8 BIT, ques9 BIT, ques10 BIT)', [])
		.then(res => console.log('Executed SQL'))
		.catch(e => console.log(e));
		this.navCtrl.push('QuizPage');
      //db.executeSql('INSERT INTO user VALUES(NULL,?,?,?)',[this.data.name,this.data.phone,this.data.score])
        //.then(res => {
         //console.log(res);
          //this.toast.show('Data saved', '1000', 'center').subscribe(
            //toast => {
              //this.navCtrl.push('QuizPage');
            //}
          //);
        //})
        //.catch(e => {
          //console.log(e);
          //this.toast.show(e, '5000', 'center').subscribe(
            //toast => {
             //console.log(toast);
            //}
          //);
        //});
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  
  skip() {
	this.navCtrl.push('QuizPage');
  }
  
  clearData() {
	this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
	db.executeSql('DROP TABLE user', [])
		.then(res => console.log('Executed SQL'))
		.catch(e => console.log(e));
	db.executeSql('DROP TABLE result', [])
		.then(res => console.log('Executed SQL'))
		.catch(e => console.log(e));
	}).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  
  report() {
	this.navCtrl.push('ReportPage');
  }
}
