import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetConfigSuccess, GetConfig, EConfigActions } from '../actions/config.actions';
import { ConfigService } from 'src/services/config.service';
import { IConfig } from 'src/models/config.interface';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
            ofType<GetConfig>(EConfigActions.GetConfig),
            switchMap(() => this._configService.getConfig()),
            switchMap((config: IConfig) => {
                return of(new GetConfigSuccess(config));
            })
        )

    constructor(private _configService: ConfigService,
        private _actions$: Actions
    ) { }
}