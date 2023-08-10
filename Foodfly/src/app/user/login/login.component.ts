import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../shared.css']
})

export class LoginComponent {
  loginData: any = {}; 
 
  constructor(
     private userService: UserService,
      private router:Router,
      private notificationService: NotificationService ){}
 
 
    login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(
      () => {
        this.router.navigate(['/catalog']);
       console.log(this.userService.user)
        ;
      },
      (error) => {
        this.notificationService.setNotification('Wrong email or password!', 'error');
      }
    );
}
}