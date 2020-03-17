import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  public sayHelloWorldTo = (name: string) => {
    return `Hello World ${name}`;
  }
}
