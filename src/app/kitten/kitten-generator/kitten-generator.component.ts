import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten-generator',
  templateUrl: './kitten-generator.component.html',
  styleUrls: ['./kitten-generator.component.css']
})
export class KittenGeneratorComponent implements OnInit {

  constructor() {
    const kittenApi: string = 'http://placekitten.com/g/'
  }

  ngOnInit() {
  }

}
