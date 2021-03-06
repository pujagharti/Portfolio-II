import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent} from "./auth/login/login.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  {
    path: 'signup',
    component: SignupComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
]
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRoutingModule {

}
