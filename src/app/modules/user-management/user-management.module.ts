import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UserFilterPipe } from './user-filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, RegisterUserComponent, DashboardComponent, CreateProductComponent, UserFilterPipe],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserManagementModule { 
  constructor() {
    console.log("Module loaded");
  }
}
