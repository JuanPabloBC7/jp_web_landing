import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
    setTimeout(() => {
      this.loading = false;
      this.showMessage = true;
      this.success = false;
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}
