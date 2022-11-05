import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  skills = ["Angular", "JavaScript", "TypeScript", "Java", "Spring Boot", "RESTful API's", "Microservices"];
  skillsImage = [
    { name: 'HTML', imgUrl: '../../../assets/svg/html.svg' },
    { name: 'CSS', imgUrl: '../../../assets/svg/css.svg' },
    { name: 'JavaScript', imgUrl: '../../../assets/svg/javascript.svg' },
    { name: 'Angular', imgUrl: '../../../assets/svg/angular.svg' },
    { name: 'TypeScript', imgUrl: '../../../assets/svg/typescript.svg' },
    { name: 'Java', imgUrl: '../../../assets/svg/java.svg' },
    { name: 'Spring Boot', imgUrl: '../../../assets/svg/spring.svg' },
    { name: 'GIT', imgUrl: '../../../assets/svg/git.svg' },
    { name: 'Docker', imgUrl: '../../../assets/svg/docker.svg' },
    { name: 'Jenkins', imgUrl: '../../../assets/svg/jenkins.svg' },
    { name: 'SonarQube', imgUrl: '../../../assets/svg/sonarqube.svg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
