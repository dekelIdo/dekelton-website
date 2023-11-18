import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit, OnDestroy {
  contactMeForm: FormGroup = new FormBuilder().group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\u0590-\u05FFa-zA-Z]+$/),
        Validators.minLength(2),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\u0590-\u05FFa-zA-Z]+$/),
        Validators.minLength(2),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(5)],
    ],
    phone: ['', [Validators.required, Validators.pattern(/^[\d\+\-]{8,}$/)]],
    message: ['', []],
  });

  isLoaderActive: boolean = false;
  isSuccess: boolean = false;
  username: string = '';
  private subscription: Subscription[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.subscription.push(
      this.contactMeForm.valueChanges.subscribe(() => {
        this.isSuccess = false;
      })
    );
    this.subscription.push(
      this.contactService.isContactRequestReceived$.subscribe(
        (request: boolean) => {
          if (request) {
            this.isLoaderActive = false;
            this.clearForm();
            this.isSuccess = true;
          }
        }
      )
    );
  }

  clearForm() {
    this.contactMeForm.reset();
  }

  shouldDisplayError(controlName: string): boolean | null {
    const control = this.contactMeForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  capitalizeFirstLetter(controlName: string): void {
    const control = this.contactMeForm.get(controlName);
    if (control?.value) {
      const capitalizedValue =
        control.value.charAt(0).toUpperCase() + control.value.slice(1);
      control.setValue(capitalizedValue, { emitEvent: false });
    }
  }

  onSubmit() {
    if (this.contactMeForm?.valid) {
      this.isLoaderActive = true;
      this.username = this.contactMeForm.value.firstName;
      this.contactService.sentContact(this.contactMeForm.value);
    }
  }
  
  ngOnDestroy() {
    this.subscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
