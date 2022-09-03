import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { AuthService, AuthUpResponseData } from '../shared/auth.service';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective,{static: true}) alertHost!: PlaceholderDirective;
  private closeSub!: Subscription;

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
    //console.log(authForm.value);
    if (authForm.valid) {
      this.isLoading = true;
      const email = authForm.value.email;
      const password = authForm.value.password;
      let authObs!: Observable<AuthUpResponseData>;
      if (this.isLoginMode) {
        authObs = this.authService.login(email,password);
      } else {
        authObs = this.authService.signUp(email, password)
      }
      authObs.subscribe({
          next: (response) => {
            //console.log('Response : ', response);
            this.error = null
            this.isLoading = false;
            this.router.navigate(["/AquaticFoods"])
          },
          error: errorMessage => {
            //console.log(errorMessage.name,errorMessage.message);
            this.showErrorAlert(errorMessage)
            this.isLoading = false;
          }
        });
    }
    authForm.reset();
  }
  onHandleAlert(){
    this.error = null;
  }
  private showErrorAlert(message: string){
    const viewContainerRef = this.alertHost.viewContainerRed;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AlertComponent>(AlertComponent);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() =>{
      this.closeSub.unsubscribe();
      viewContainerRef.clear();
    })
  }
}
