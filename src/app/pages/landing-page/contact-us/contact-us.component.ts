import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  showMessage = false;
  success = false;
  notification = {
    successMessage: '',
    errorMessage: '',
  };

  constructor(
    private fb: FormBuilder,
    private translateServices: TranslateService,
  ) {
    this.translateServices.stream('pages.contact.notifications').subscribe(res => {
      this.notification = res;
    });
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.showMessage = false;
    this.success = false;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    const SERVICE_ID = 'service_vzqsluu';
    const TEMPLATE_ID = 'template_nzq0yik';
    const PUBLIC_KEY = 'hGB6nzxcyxPQ0-4Dc';

    const templateParams = {
      name: this.contactForm.value.name,
      title: this.contactForm.value.name,
      email: this.contactForm.value.email,
      time: new Date(),
      message: this.contactForm.value.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(() => {
      this.loading = false;
      this.showMessage = true;
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
    }, (error) => {
      this.loading = false;
      this.showMessage = true;
      this.success = false;
    });
  }
}
