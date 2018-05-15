import { Component,ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aprValue;
  showApproveBtn = false;
  @ViewChild('form') form: FormsModule;


	generateAPR(): void {
		this.aprValue = this.random(6,9).toString() + " %"
    this.showApproveBtn = true;
	}

	random(min, max): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reset():void{
    this.form.reset();
    this.aprValue = '';
    this.showApproveBtn=false;
  }



}
