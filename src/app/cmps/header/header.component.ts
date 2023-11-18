import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/header.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  isMenuOpen: boolean = false;
  classMenuOpen: string = 'mobile-nav active'
  classMenuClose: string = 'mobile-nav'

  links: Link[] = [
    {
      routerLink: '',
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

  title = ' Dekel Ido';
  subtitle = '/ Frontend Developer'
  ngOnInit(): void {}
}
