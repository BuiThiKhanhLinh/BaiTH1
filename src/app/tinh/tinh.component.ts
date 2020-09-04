import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinh',
  templateUrl: './tinh.component.html',
  styleUrls: ['./tinh.component.css']
})
export class TinhComponent implements OnInit {

  ngOnInit(): void {
  }
  x: number;
  n: number;
  s = 0;
  constructor() { }
  bai1() {
    this.s = 0;
    let lt = 1;
    for (let i = 1; i <= this.n; i++) {
      lt *= this.x;
      this.s += lt;
    }
  }
}
