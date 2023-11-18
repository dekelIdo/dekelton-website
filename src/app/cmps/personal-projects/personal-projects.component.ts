import { Project } from './../../models/personal-project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent {
 
  projects: Project[] = [
    {
      title: 'Skyllo',
      imageUrl: 'assets/images/Skyllo.png',
      description: 'App that helps to manage projects and tasks using a kanban board. Usually each project is a board, and cards are the tasks and subjects.',
      githubLink: 'https://github.com/dekelIdo/Skyllo-frontend',
      projectLink: 'https://skyllo.onrender.com/',
      technologies: ['nodejs', 'react', 'express']
    },
    {
      title: 'We.bitcoin',
      imageUrl: 'assets/images/We.bitcoin.png',
      description: 'A crypto wallet platform that helps invest and transfer crypto coins between contacts.',
      githubLink: 'https://github.com/dekelIdo/We.bitcoin',
      projectLink: 'https://dekelido.github.io/We.bitcoin/#/',
      technologies: ['typescript', 'angular']
    },
    {
      title: 'Google App',
      imageUrl: 'assets/images/Google App.png',
      description: 'My first app in React, in which you can manage inbox mail and a to-do note list. we also can find there an inspire to Google Note.',
      githubLink: 'https://github.com/dekelIdo/Google-app',
      projectLink: 'https://dekelido.github.io/Google-app/#/',
      technologies: ['redux', 'react', 'mongo']
    },
    {
      title: 'PeerPharm System',
      imageUrl: 'assets/images/PeerPharm System.png',
      description: 'In house system to handle interfaces between workers and suppliers, with user login/sign-up validation.',
      githubLink: 'https://github.com/dekelIdo',
      projectLink: 'https://peerpharmsystem.com/',
      technologies: ['aws', 'mongo', 'angular','sass','typescript']
    },
  ];

  constructor() {}

}
