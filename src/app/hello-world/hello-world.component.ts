import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HellowWorldService } from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  title = '';
  texts: string[];
  style: object;
  company: any;

  constructor(
    service: HellowWorldService,
    private activatedRoute: ActivatedRoute
  ) {
    this.texts = service.getTexts();
    this.company = this.activatedRoute.snapshot.params['company'];
    this.style = service.getStyle(this.company);
  }

  ngOnInit(): void {}

  getTittle() {
    return (this.title = 'Hello World!');
  }
}
