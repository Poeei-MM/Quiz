import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, Slides, AlertController, ViewController } from 'ionic-angular';
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
  quizdata : any[] = [10];
  qa : any[] = [];

  choiceanswer : any;
  answer : any;
  myscore : number = 0;
  indexslide : any;
  sindex : any;
  constructor( public navCtrl: NavController,
			   public http: Http,
			   public rest: RestProvider, 
			   public toastCtrl: ToastController,
			   public alertCtrl: AlertController,
			   public viewCtrl: ViewController ) { 
	
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
	    
	    this.quizdata[0] = this.concertsrd[0];
	    this.quizdata[1] = this.concertsrd[1];
	    this.quizdata[2] = this.concertsrd[2];
	    this.quizdata[3] = this.concertsrd[3];
	    this.quizdata[4] = this.concertsrd[4];
	    this.quizdata[5] = this.concertsrd[5];
	    this.quizdata[6] = this.concertsrd[6];
	    this.quizdata[7] = this.concertsrd[7];
	    this.quizdata[8] = this.concertsrd[8];
	    this.quizdata[9] = this.concertsrd[9];
	    
	    console.log(this.quizdata);
	  this.slides.lockSwipes(true);
    });
    
  }
  
  go(concert) {
	  this.answer = null;
	  
	  console.log(this.answer);
		if(!this.choiceanswer){
			alert("Choose 1 answer!");
			//this.ionViewDidLoad();
		}
		else {
			this.answer = this.choiceanswer;
			console.log(concert);
			if(this.answer === concert.hint) {
				this.myscore += 1;
				this.qa.push({id: concert.id , qa: true });
			}
			else {
				this.qa.push({id: concert.id , qa: false });
			}
			this.next(this.answer);
		}
	
  }

  next(ans) {
	//this.sindex = this.slides.isBeginning();
	this.indexslide = this.slides.isEnd();
	
	if(ans) {
		this.slides.lockSwipeToNext(false);
			if(!this.indexslide) {
				
				this.slides.slideNext(500);
				this.slides.lockSwipes(true);
				
			}
			else
			{
				const alert = this.alertCtrl.create({
				  title: 'Your Score is',
				  subTitle: '<h2><strong>' + this.myscore + '</strong></h2>',
				  message: 'Thank you for playing with us!',
				  buttons: [{
					  text: 'Ok',
					  handler: () =>{
					    var score = this.myscore;
					    var queans = this.qa;
						this.navCtrl.push('ListPage', {score, queans});
						console.log(this.qa);
					  }
					}]
				});
				alert.present();
			}
	
	}
	this.choiceanswer = null;
	
  }
}
