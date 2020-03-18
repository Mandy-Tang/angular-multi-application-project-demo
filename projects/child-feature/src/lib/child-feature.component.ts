import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-child-feature',
  template: `
    <ul>
      <li>
        <a routerLink="./page-one">page one</a>
      </li>
      <li>
        <a routerLink="./page-two">page two</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ChildFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
