import { Component,ViewChild } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';

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
  @ViewChild('form') form: NgForm;


	generateResultValue(): void {
    if(this.counter == 4 || this.counter == 7){
      this.resultValue = 'Negative';
    }
    else{
      this.resultValue = 'Positive';
    }
    this.counter++;
    this.ccrHighlight = true;
    window.setTimeout(() => this.ccrHighlight = false, 200)

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
    this.aprValue = this.random(6,9).toString() + " %";
    this.arpHighlight = true;
    window.setTimeout(() => this.arpHighlight = false, 200)

  }


}
