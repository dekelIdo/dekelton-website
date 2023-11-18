import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/education.mode';
@Component({
  selector: 'app-projects',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  educations  : Education[] = [
    {
      title: "Coding Academy",
      imageUrl: "assets/images/coding-academy.png",
      description: "Graduate of the Coding Academy - 640 hours of an intensive coding Bootcamp. they optimized and improved my performance, and actually this is my first education in development. I learned there how to solution problems of clients and how to get a far perspective of what i see in the browser, and the best thing is that i got a job thank to them.",
    },
    {
      title: "E-square Booster",
      imageUrl: "assets/images/e-sqr.png",
      description: "A course in a weekly format for the company's employees, who conduct training on the new technologies in Angular and how to improve our performance in our day-to-day work",
    },
    {
      title: "Udemy",
      imageUrl: "assets/images/udemy.png",
      description: "During the traning for interviews i took a small course on Udemy for UX/UI because im very passionate to design and most of the places dont pay so much attention to this",
    }
  ]
  ngOnInit(): void {}
}
