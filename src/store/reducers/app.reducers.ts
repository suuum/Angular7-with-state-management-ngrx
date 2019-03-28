import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducer';
import { userReducers } from './users.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};