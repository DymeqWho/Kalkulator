import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css'],
})
export class KalkulatorComponent implements OnInit {
  public number1 = 0;
  public number2 = 0;
  public result = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.result = this.number1 + this.number2;
  }

  subtract(): void {
    this.result = this.number1 - this.number2;
  }

  multiply(): void {
    this.result = this.number1 * this.number2;
  }

  divide(): void {
    if (this.number2 !== 0) {
      this.result = this.number1 / this.number2;
    } else {
      this.result = NaN;
    }
  }

  isNaN(): boolean {
    return Number.isNaN(this.result);
  }
}
