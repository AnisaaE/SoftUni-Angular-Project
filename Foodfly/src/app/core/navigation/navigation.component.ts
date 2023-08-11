import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { GlobalLoaderService } from '../global-loader/global-loader.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
   loading = false;
    constructor(private userService: UserService, 
      private router: Router,
      private globalLoaderService: GlobalLoaderService) {}
  
    get isLoggedIn(): boolean {
      return this.userService.isLogged;
    }
  
    get username(): string {
      return this.userService.user?.username || '';
    }
  
logout(): void {
  this.globalLoaderService.showLoader();
  this.userService.logout().subscribe({
    next: () => {
      this.globalLoaderService.hideLoader();
      this.router.navigate(['/login']);
    },
    error: () => {
      this.globalLoaderService.hideLoader();
      this.router.navigate(['/auth/login']);
    },
  });
}
}
