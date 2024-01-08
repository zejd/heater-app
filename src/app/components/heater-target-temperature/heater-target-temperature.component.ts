import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-heater-target-temperature',
  templateUrl: './heater-target-temperature.component.html',
  styleUrls: ['./heater-target-temperature.component.css']
})

export class HeaterTargetTemperatureComponent implements OnChanges {

  @Input() minTemperature: number = 0;
  @Input() maxTemperature: number = 0;
  @Input() targetTemperature: number = 0;

  private transformRotateMinValue = -130;
  private transformRotateMaxValue = 130;
  public rotationValue = 0;

  ngOnChanges(changes: SimpleChanges): void {
      this.rotationValue = this.calculateRotationValue();
  }

  public calculateRotationValue(): number {
    if (this.targetTemperature >= this.maxTemperature) {
      return this.transformRotateMaxValue;
    } else if (this.targetTemperature <= this.minTemperature) {
      return this.transformRotateMinValue;
    }
    const percentage = ((this.targetTemperature - this.minTemperature) / (this.maxTemperature - this.minTemperature)) * 100;
    return this.transformRotateMinValue + (percentage / 100) * (this.transformRotateMaxValue - this.transformRotateMinValue);
  }

}
