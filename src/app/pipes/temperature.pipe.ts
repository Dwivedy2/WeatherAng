import {Pipe, PipeTransform} from '@angular/core';
import { TemperatureConstants } from '../constants/temperature.const';

@Pipe({
    name: 'temperature'
})

export class TemperaturePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value - TemperatureConstants.KELVIN_TO_CELCIUS;
    }
}