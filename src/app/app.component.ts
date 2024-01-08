import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Heater App';
  public minTemperature: number;
  public maxTemperature: number;
  public targetTemperature: number;

  constructor() {
    this.minTemperature = 15;
    this.maxTemperature = 200;
    this.targetTemperature = 50;
  }

}
