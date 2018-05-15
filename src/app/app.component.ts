import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aprValue;


	generateAPR(): void {
		this.aprValue = this.random(6,9).toString() + " %"
	}

	random(min, max): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



}
