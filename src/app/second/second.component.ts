import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<div class="alert alert-warning" role="alert"><h4>This is SecondComponent</h4></div>`,
  styles: [`
    h4 {color: gold }
        `]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
