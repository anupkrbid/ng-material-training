import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  maxDate: Date;
  constructor(public authService: AuthService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        dateOfBirth: new FormControl({ value: null }, Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, Validators.required),
        agreed: new FormControl(null, [Validators.required, Validators.requiredTrue])
      },
      { validator: this.passwordMissmatch }
    );

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  /** Custom confirm password validator */
  passwordMissmatch = (control: AbstractControl): { [key: string]: boolean } => {
    const pass = control.get('password');
    const cnfPass = control.get('confirmPassword');

    if (!pass || !cnfPass) {
      return null;
    }
    if (pass.value === cnfPass.value) {
      return null;
    } else {
      control.get('confirmPassword').setErrors({ passwordMissmatch: true });
      return { passwordMissmatch: true };
    }
  }

  onSubmit() {
    this.authService.signup(this.form.value);
  }

}
