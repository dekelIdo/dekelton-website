import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  paragraph: string = `
  I am Dekel Ido, 27 years old and single.
  I am a Frontend developer with a passion for development and fast learning.
  I am determined to work for the company OSA Commerce and give them all of my abilities.
  I love people and I'm a team player!
`;
  motto: string = 'My motto is - "Dreams without goals are just dreams"';
  job: string = 'Frontend developer';
  myName: string = 'Dekel Ido';

  downloadCV(): void {
    const resumePath = '../../../assets/files/dekel-resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Dekel-Ido_resume.pdf'; 
    link.click();
  }
}
