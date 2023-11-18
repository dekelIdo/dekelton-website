import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { AboutMeComponent } from './cmps/about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonalProjectsComponent } from './cmps/personal-projects/personal-projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { ContactMeComponent } from './cmps/contact-me/contact-me.component';
import { EducationComponent } from './cmps/education/education.component';
import { FooterComponent } from './cmps/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PersonalProjectsComponent,
    ContactMeComponent,
    EducationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
