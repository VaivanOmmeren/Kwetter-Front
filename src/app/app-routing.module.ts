import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegistrateComponent} from './registrate/registrate.component';
import {ProfileComponent} from './profile/profile.component';
import {TimelineComponent} from './timeline/timeline.component';
import {HomeComponent} from './home/home.component';
import {TrendinglistComponent} from './trendinglist/trendinglist.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';
import {AuthGuardService as AuthGuard} from './src/app/service/AuthGuard/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrate', component: RegistrateComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'trending/:tag', component: TrendinglistComponent},
  {
    path: 'admin', component: AdminpanelComponent, canActivate: [AuthGuard], data: {
      expectedRole: 'Administrator'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
