import { Component} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent  {
  downloadCV(): void {
    const resumePath = '../../../assets/files/dekel-resume.pdf'; // Adjust the path to match your actual file location
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Dekel-Ido_resume.pdf'; // You can set the desired name for the downloaded file
    link.click();
  }
}
