import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './cmps/about-me/about-me.component';
import { PersonalProjectsComponent } from './cmps/personal-projects/personal-projects.component';
import { ContactMeComponent } from './cmps/contact-me/contact-me.component';
import { EducationComponent } from './cmps/education/education.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: 'education', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
