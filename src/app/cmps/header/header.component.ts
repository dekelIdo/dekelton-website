import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/header.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  isMobile: boolean = false;
  mobileNavClass: string = 'mobile-nav show'
  links: Link[] = [
    {
      routerLink: 'about-me',
      title: 'About Me',
    },
    {
      routerLink: 'personal-projects',
      title: 'Projects',
    },
    {
      routerLink: 'education',
      title: 'Education',
    },
    {
      routerLink: 'contact-me',
      title: 'Contact Me',
    },
  ];

  title = ' Dekelton ';
  ngOnInit(): void {}
}
