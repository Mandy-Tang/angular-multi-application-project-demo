import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-child-feature',
  template: `
    <p>
      child-feature works!
    </p>
  `,
  styles: []
})
export class ChildFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
