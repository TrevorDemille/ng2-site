import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
  	{
  		src: 'assets/characters1_fountain.png'
  	}, {
  		src: 'assets/circle7ring2_ballpoint.png'
  	}, {
  		src: 'assets/elements_marker.jpg'
  	}, {
  		src: 'assets/entanglement_ballpoint.png'
  	}
  ]
}
