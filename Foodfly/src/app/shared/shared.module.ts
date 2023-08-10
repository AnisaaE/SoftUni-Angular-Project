import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    NotificationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [NotificationService],
  exports: [NotificationComponent, LoaderComponent]
})
export class SharedModule { }
