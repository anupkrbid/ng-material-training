import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, Validators.required)
      },
      { validator: this.passwordMissmatch }
    );
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
    console.log(this.form.value);
  }
}
