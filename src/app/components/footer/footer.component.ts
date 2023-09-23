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

  ngOnInit(): void {
    var typewriter = this.setupTypewriter1();
    typewriter.type();
  }
  
  setupTypewriter1(): { type: () => void } {
    const t = document.getElementById('code1');
    const HTML: string = t?.innerHTML || '';

    if (t) t.innerHTML = '';

    let cursorPosition: number = 0;
    let tag: any;
    let writingTag: boolean = false;
    let tagOpen: boolean = false;
    let typeSpeed: number = 100;
    let tempTypeSpeed: number = 0;

    const type = (): void => {
      if (writingTag === true) {
        tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === '<') {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
          tag = '';
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === ' ') {
          tempTypeSpeed = 0;
        } else {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
        }
        if (t) t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === '>') {
        tempTypeSpeed = Math.random() * typeSpeed + 50;
        writingTag = false;
        if (tagOpen) {
          const newSpan = document.createElement('span');
          if (t) t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
        }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
        setTimeout(type, tempTypeSpeed);
      }
    };

    return {
      type: type,
    };
  }
}
