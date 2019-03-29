import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from '../store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from '../store/effects/config.effects';
import { UserEffects } from '../store/effects/user.effects';
import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FootballClubService } from 'src/services/footballClub.service';
import { FootballClubsComponent } from './containers/football-clubs/football-clubs.component';
import { FootballClubComponent } from './containers/football-club/football-club.component';
import { FootballClubDetailsComponent } from './components/football-club-details/football-club-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    FootballClubsComponent,
    FootballClubComponent,
    FootballClubDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [UserService, FootballClubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
