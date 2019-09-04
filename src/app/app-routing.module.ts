import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { ListResolverService } from './list-resolver.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthListGuard } from './guards/auth-list.guard';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {
    path: 'list', component: ListComponent,
    resolve: {
      data: ListResolverService
    },
    canActivate: [AuthListGuard]
  },
  { path: 'edit/:id', component: EditComponent,  canActivate: [AuthListGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthListGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'users', loadChildren: './modules/user-management/user-management.module#UserManagementModule'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
