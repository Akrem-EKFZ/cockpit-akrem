import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  formGroup: FormGroup;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nationalId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    const passwordInput = document.querySelector('input[formControlName="password"]');
    if (passwordInput) {
      passwordInput.setAttribute('type', this.hidePassword ? 'password' : 'text');
    }
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched(); 
      return;
    }

    
  }

  get nationalId() {
    return this.formGroup.get('nationalId');
  }

  get password() {
    return this.formGroup.get('password');
  }
}