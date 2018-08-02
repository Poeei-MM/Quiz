import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, Slides, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RestProvider } from '../../providers/rest/rest';

//declare var myscore : number = 0;

@IonicPage()
@Component({
  selector: 'page-concert-card',
  templateUrl: 'concert-card.html',
})
export class ConcertCardPage {
  
  @ViewChild('slides') slides: Slides;
  
  concerts	: any[];
  concertsrd : any[];
  answer : any;
  myscore : number = 0;
  index : any;
  sindex : any;
  constructor( public navCtrl: NavController,
			   public http: Http,
			   public rest: RestProvider, 
			   public toastCtrl: ToastController,
			   public alertCtrl: AlertController ) { 
	
    this.rest.getData().subscribe(data => {
      console.log(data);
      this.concerts = data;
      console.log(this.concerts);
		
		this.concertsrd = [];
		while (this.concerts.length) {
		let data = Math.round(Math.random() * (this.concerts.length - 1));
		this.concertsrd.push(this.concerts[data]);
		this.concerts.splice(data, 1);
		}
	    console.log(this.concertsrd);
	    
	  this.slides.lockSwipes(true);
    });
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
    
  }
  
  selectAnswer(ans, concert) {
	
	this.answer = ans;
	if(ans) {
		this.slides.lockSwipes(false);
		this.slides.lockSwipeToPrev(true);
		if(ans === concert.hint) {
			
			
			this.myscore += 1;
			
		let toast = this.toastCtrl.create({
		  message: 'Right!',
		  duration: 500,
		  position: 'middle',
		  cssClass: 'rightans'
		});

		toast.present(toast);
		
		}
		else {
		let toast = this.toastCtrl.create({
		  message: 'Wrong!',
		  duration: 500,
		  position: 'middle',
		  cssClass: 'wrongans'
		});

		toast.present(toast);
		}
	}
	
  }
  

  next(ans) {
	//this.sindex = this.slides.isBeginning();
	this.index = this.slides.isEnd();
	console.log(ans);
	if(ans) {
		
		if(!this.index) {
			this.slides.slideNext();
			this.slides.lockSwipes(true);
		}
		else
		{
			const alert = this.alertCtrl.create({
			  title: 'Your Score is',
			  subTitle: '<h2><strong>' + this.myscore + '</strong></h2>',
			  message: 'Thank you for playing with us!',
			  buttons: ['OK']
			});
			alert.present();
		}
	}
	this.answer = null;
	
  }
}
