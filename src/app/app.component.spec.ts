import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  HeaterTargetTemperatureComponent
} from "./components/heater-target-temperature/heater-target-temperature.component";
import { FormsModule } from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaterTargetTemperatureComponent
      ],
      imports: [ FormsModule ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Heater App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Heater App');
  });

});
