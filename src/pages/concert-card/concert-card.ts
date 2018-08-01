import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, Slides } from 'ionic-angular';
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
  answers : any[];
  myscore : number = 0;
  index : any;
  sindex : any;
  constructor( public navCtrl: NavController, public http: Http, public rest: RestProvider, public toastCtrl: ToastController ) { 
	this.rest.getData().subscribe(data => {
      console.log(data);
      this.concerts = data;
    });
  }
  
  selectAnswer(ans, id) {
	if(ans === this.concerts[id].answer.rans) {
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
  

  next() {
	this.slides.lockSwipeToPrev(true);
    this.sindex = this.slides.isBeginning();
    
	this.index = this.slides.isEnd();
	
	if(!this.index) {
		this.slides.slideNext();
    }
    else
    {
		alert('Finish! Your score is ' + this.myscore);
    }
    
  }
}
