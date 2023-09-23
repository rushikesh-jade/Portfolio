import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDetails = [
    { 
      name: 'Government College Of Engineering, Jalgaon',
      address: 'Jalgaon, Maharashtra, India',
      degree: 'B.Tech. Computer Engineering',
      year: '2016 - 2020',
      marks: 'CGPA: 7.5 / 10',
      logoURL: '../../../assets/images/gcoej_logo.png'
    },
    { 
      name: 'N.E.S. Higher Secondary School, Parola',
      address: 'Parola, Maharashtra, India',
      degree: '12th / Intermediate',
      year: '2015 - 2016',
      marks: 'Percentage: 78.77%',
      logoURL: '../../../assets/images/nes.jpeg'
    },
    { 
      name: 'Dr. V.M. Jain Madhyamik Vidyalaya, Parola',
      address: 'Parola, Maharashtra, India',
      degree: '10th / High School',
      year: '2013 - 2014',
      marks: 'Percentage: 84.80%',
      logoURL: 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/null/external-College-smooth-conceptual-smashingstocks-flat-smashing-stocks.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
