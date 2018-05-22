import { Component,ViewChild } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;
  aprValue;
  resultValue;
  showApproveBtn = true;
  ccrHighlight = false;
  arpHighlight = false;
  showSpinner = false;
  @ViewChild('form') form: NgForm;


	generateResultValue(): void {
    this.counter++;
    this.showSpinner = true;
    window.setTimeout(() => {this.showSpinner = false;this.ccrHighlight = true;this.setCCR();
    window.setTimeout(() => {this.ccrHighlight = false}, 200)}, 3000)

	}

  setCCR():void{
    if(this.counter == 2 || this.counter == 4){
      this.resultValue = 'Negative';
    }
    else{
      this.resultValue = 'Positive';
    }
    if(this.counter==5){
      this.counter=0;
    }
  }

	random(min, max): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reset():void{
    this.form.reset();
    this.aprValue = '';
    this.resultValue = '';
  }

  generateAPR():void{
    this.showSpinner = true;
    window.setTimeout(() => {this.showSpinner = false;this.arpHighlight = true;this.setAPR();
    window.setTimeout(() => {this.arpHighlight = false}, 200)}, 3000)

  }

  setAPR():void{
    this.aprValue = this.random(6,9).toString() + " %";
  }

}
