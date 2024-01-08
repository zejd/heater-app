import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterTargetTemperatureComponent } from './heater-target-temperature.component';
import { FormsModule } from "@angular/forms";

describe('HeaterTargetTemperatureComponent', () => {
  let component: HeaterTargetTemperatureComponent;
  let fixture: ComponentFixture<HeaterTargetTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaterTargetTemperatureComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaterTargetTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate rotation value correctly', () => {
    component.minTemperature = 0;
    component.maxTemperature = 100;
    component.targetTemperature = 50;

    component.ngOnChanges({});

    const rotationValue = component.calculateRotationValue();

    expect(rotationValue).toBe(0);
  });
});
