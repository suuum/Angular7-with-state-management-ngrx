import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IFootballClub } from 'src/models/footballClub.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballClubService {
  configUrl = `${environment.apiUrl}footballClubs.json`;

  constructor(private _http: HttpClient) { }

  getFootballClubs(): Observable<IFootballClub[]> {
    return this._http.get<IFootballClub[]>(this.configUrl);
  }
}