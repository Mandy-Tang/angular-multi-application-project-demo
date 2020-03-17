import { Component } from '@angular/core';
import { HelloWorldService } from 'projects/dependences/src/lib/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  constructor(private helloWorldService: HelloWorldService) {
    this.title = `${this.helloWorldService.sayHelloWorldTo('Mandy')}, ${this.title} `;
  }
}
