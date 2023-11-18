import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import {
  map,
  of,
  catchError,
  BehaviorSubject,
} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private ContactService: ContactService,
  ) {}

  ngOnInit() {
  }

}
