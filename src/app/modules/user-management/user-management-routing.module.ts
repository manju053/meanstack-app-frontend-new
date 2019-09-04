import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'register', component: RegisterUserComponent },
            { path: 'dashboard', component: DashboardComponent},
            {path: 'create', component: CreateProductComponent},
            {path: '', redirectTo: 'users/dashboard', pathMatch: 'full'}
        ]
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserManagementRoutingModule { }