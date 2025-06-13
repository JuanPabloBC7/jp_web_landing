import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  success = false;

  constructor(
    private fb: FormBuilder,
  ) {
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
    this.success = false;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    // Simula envío
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}
