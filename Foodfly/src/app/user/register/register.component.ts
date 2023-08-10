
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared.css'], // Add your CSS file here
})
export class RegisterComponent {

  registerData:any ={}
  constructor(
     private userService: UserService,
     private router:Router,
     private notificationService: NotificationService ){}

     register(form: NgForm): void {
      if (form.invalid) {
        return;
      }
  
      const { username, email, password, repeatPassword } = form.value;
       
      if(password== repeatPassword){ 
        this.userService.register( username,email, password).subscribe(
        () => {
          this.router.navigate(['/catalog']);
          console.log(this.userService.user)
        },
        (error) => {
          this.notificationService.setNotification('Server error... Try again later!', 'error');
        }
      );
    }else this.notificationService.setNotification('Passwords don`t match!', 'error');
  
     
  }
  
   
}
