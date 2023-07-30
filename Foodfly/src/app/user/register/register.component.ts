
import { Component } from '@angular/core';
// import { AuthContext } from '../../context/authContext';
// import { Notification } from '../Notification/Notification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared.css'], // Add your CSS file here
})
export class RegisterComponent {
  values = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  errors: string[] = [];
  showNotification = false;

  // constructor(private authContext: AuthContext) {}

  // handleSubmit() {
  //   this.authContext.onSubmitRegister(this.values);
  //   // You might want to handle the response from the backend here and set errors accordingly.
  //   this.errors = []; // Set the errors based on the response from the backend (if any).
  //   this.showNotification = this.errors.length > 0;
  // }
}
