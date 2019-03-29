import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { FootballClubsComponent } from './containers/football-clubs/football-clubs.component';
import { FootballClubComponent } from './containers/football-club/football-club.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'football-clubs', component: FootballClubsComponent },
  { path: 'football-club:id', component: FootballClubComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
