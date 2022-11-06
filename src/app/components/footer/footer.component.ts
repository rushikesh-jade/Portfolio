import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  funnyCode = "while (coffee == 'hot') { code(🤧) }";

  constructor() { }

  ngOnInit(): void {  }

}
