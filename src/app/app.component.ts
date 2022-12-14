import { Component } from '@angular/core';
import {Chart} from 'chart.js';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	chartOptions = {
	  animationEnabled: true,
	  theme: "dark2",
	  exportEnabled: true,
	  title: {
		text: "Select Ratio %"
	  },
	  data: [{
		type: "pie", //change type to column, line, area, doughnut, etc
		indexLabel: "{name}: {y}%",
		dataPoints: [
      { y: 14.1, name: "L1 select" },

      { y: 28.2, name: "L2 select" },

      { y: 14.4, name: "L3 select" },

      { y: 43.3, name: "BU approved" },

      { y: 43.3, name: "Offer-accept" },

      { y: 43.3, name: "joined" },

      { y: 43.3, name: "L1 scheduled" },

      { y: 43.3, name: "L2 scheduled" },

      { y: 43.3, name: "L3 scheduled" },

      { y: 43.3, name: "L1-L2 scheduled" },

      { y: 43.3, name: "L1-:L2 select" },

      { y: 43.3, name: "BU approved" },

      { y: 43.3, name: "L1-L2 on hold" },

      { y: 51, name: "Pre-screen select" },
		]
	  }]
	}
}                  
