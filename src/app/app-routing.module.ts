import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {ProfileComponent} from './profile/profile.component';
import {TimelineComponent} from './timeline/timeline.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrate', component: RegistrateComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'timeline', component: TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
