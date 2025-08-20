import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  temperatureForm!: FormGroup;
  convertedTemperature: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.temperatureForm = this.fb.group({
      temperature: ['', [Validators.required]],
      fromUnit: ['', [Validators.required]],
      toUnit: ['', [Validators.required]]
    });
  }

  // Conversion logic function
  convertTemperature(): void {
    if (this.temperatureForm.valid) {
      const { temperature, fromUnit, toUnit } = this.temperatureForm.value;
      let result: number;

      // Logic for conversions 🌡️
      if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = (temperature * 9 / 5) + 32;
        this.convertedTemperature = `${temperature} Celsius is ${result.toFixed(2)} Fahrenheit`;
      } 
      else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (temperature - 32) * 5 / 9;
        this.convertedTemperature = `${temperature} Fahrenheit is ${result.toFixed(2)} Celsius`;
      } 
      else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = temperature - 273.15;
        this.convertedTemperature = `${temperature} Kelvin is ${result.toFixed(2)} Celsius`;
      } 
      else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = temperature + 273.15;
        this.convertedTemperature = `${temperature} Celsius is ${result.toFixed(2)} Kelvin`;
      } 
      else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (temperature - 273.15) * 9 / 5 + 32;
        this.convertedTemperature = `${temperature} Kelvin is ${result.toFixed(2)} Fahrenheit`;
      } 
      else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (temperature - 32) * 5 / 9 + 273.15;
        this.convertedTemperature = `${temperature} Fahrenheit is ${result.toFixed(2)} Kelvin`;
      } 
      else {
        this.convertedTemperature = 'Please select different units for conversion.';
      }
    }
  }
}