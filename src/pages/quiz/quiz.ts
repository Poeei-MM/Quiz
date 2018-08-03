import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, Slides, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RestProvider } from '../../providers/rest/rest';

//declare var myscore : number = 0;

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  
  @ViewChild('slides') slides: Slides;
  
  concerts	: any[];
  concertsrd : any[];
  concertans : any[];
  concertansrd : any[];
  choiceanswer : any;
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
      console.log(this.concerts.length);
		
		this.concertsrd = [];
		
		while (this.concerts.length) {
			let data = Math.round(Math.random() * (this.concerts.length - 1));
			let ques = this.concerts[data];
			this.concertans = ques.answer;
			console.log(this.concertans.length);
			this.concertansrd = [];
			while (this.concertans.length) {
				let dataans = Math.round(Math.random() * (this.concertans.length - 1));
				this.concertansrd.push(this.concertans[dataans]);
				this.concertans.splice(dataans, 1);
			}
			
			this.concerts[data].answer = this.concertansrd;
			console.log(this.concertansrd);
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

  next(ans, concert) {
 
	//this.sindex = this.slides.isBeginning();
	this.index = this.slides.isEnd();
	
	if(ans) {
		this.slides.lockSwipes(false);
		
		if(ans === concert.hint) {
			
			
			this.myscore += 1;
		
		}
		
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
