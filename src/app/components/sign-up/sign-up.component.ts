import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      name : new FormControl("", Validators.required),
      surname : new FormControl("", Validators.required),
      phone : new FormControl("", Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,) {}

  ngOnInit(): void {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get address() {
    return this.signUpForm.get('address');
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get surname() {
    return this.signUpForm.get('surname');
  }

  get phone() {
    return this.signUpForm.get('phone');
  }

  submit() {
    const { email, password } = this.signUpForm.value;
    if (!this.signUpForm.valid || !password || !email) {
      return;
    }
  
    this.authenticationService
      .signUp(email, password)
      .pipe(
        this.toast.observe({
          success: 'Təbriklər! Siz qeydiyyatdan keçmisiniz',
          loading: 'Qeydiyyatdan keçırsiz...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  
  }
}
