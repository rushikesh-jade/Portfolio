import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  menus = ['About', 'Experience', 'Work', 'Contact']
  day: boolean = true;
  night: boolean = false;
  iconsName = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rushikesh-jade/' },
    { name: 'github', url: 'https://github.com/leviosa19' },
    { name: 'twitter', url: 'https://twitter.com/JadeRushikesh' },
    { name: 'instagram', url: 'https://www.instagram.com/i.m.the.rush/' },
    { name: 'email', url: 'jaderushi2014@gmail.com' }
  ]
  displayHamberger: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleMenu(): boolean {
    this.displayHamberger = !this.displayHamberger;
    return this.displayHamberger;
  }

  changeTheme() {
    this.day = !this.day
    this.night = !this.night

    if (this.night) {
      document.documentElement.style.setProperty('--background-color', '#0a192f');
      document.documentElement.style.setProperty('--nav-color', 'var(--light-slate)');
      document.documentElement.style.setProperty('--heading-color', 'var(--green)');
      document.documentElement.style.setProperty('--horizontal-bar-color', 'var(--light-slate)');
      document.documentElement.style.setProperty('--content-color', 'var(--light-slate)');
      document.documentElement.style.setProperty('--skills-color', 'var(--light-slate)');
      document.documentElement.style.setProperty('--skills-back-color', 'whitesmoke');
      document.documentElement.style.setProperty('--circle-border-color', 'var(--light-slate)');
      document.documentElement.style.setProperty('--card-background', '#191c29');
      document.documentElement.style.setProperty('--card-color', '#8892b0');
      document.documentElement.style.setProperty('--role-color', 'white');
      document.documentElement.style.setProperty('--key-color', 'var(--light-slate)');

      document.documentElement.style.setProperty('--skills-box-shaddow-color', 'rgb(252 252 255 / 50%) 0px 4px 16px, rgb(255 255 255 / 20%) 0px 8px 32px');
      document.documentElement.style.setProperty('--edu-card-box-shadow-color', '0px 0px 20px rgb(255 255 255 / 40%)');
    }
    else {
      document.documentElement.style.setProperty('--background-color', '#fcfcfc');
      document.documentElement.style.setProperty('--nav-color', 'var(--dark-slate)');
      document.documentElement.style.setProperty('--heading-color', 'var(--navy)');
      document.documentElement.style.setProperty('--horizontal-bar-color', 'var(--dark-slate)');
      document.documentElement.style.setProperty('--content-color', 'var(--dark-slate)');
      document.documentElement.style.setProperty('--skills-color', 'var(--dark-slate)');
      document.documentElement.style.setProperty('--skills-back-color', 'initial');
      document.documentElement.style.setProperty('--circle-border-color', '#fff');
      document.documentElement.style.setProperty('--card-background', '#fff');
      document.documentElement.style.setProperty('--card-color', '#000');
      document.documentElement.style.setProperty('--role-color', 'var(--dark-navy)');
      document.documentElement.style.setProperty('--key-color', 'var(--dark-slate)');

      document.documentElement.style.setProperty('--skills-box-shaddow-color', 'rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px');
      document.documentElement.style.setProperty('--edu-card-box-shadow-color', '0px 0px 20px rgb(0 0 0 / 10%)');
    }
  }

  checkForEmail(email: string) {
    return email != 'email';
  }

}
