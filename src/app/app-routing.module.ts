import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrate', component: RegistrateComponent},
  {path: 'profile/:username', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
