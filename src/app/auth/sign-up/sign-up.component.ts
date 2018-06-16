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
  maxDate: Date;

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        dateOfBirth: new FormControl(null, Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, Validators.required),
        agreed: new FormControl(null, Validators.required)
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

  /** Custom not agreed to terms and conditions validator */
  // notAgreed = (control: AbstractControl): { [key: string]: boolean } => {
  //   const agreed = control.get('agreed');
  //   console.log(agreed);
  //   if (!agreed && !(agreed.value)) {
  //     return { notAgreed: true };
  //   }
  //   return null;
  // }


  onSubmit() {
    console.log(this.form);
  }
}
