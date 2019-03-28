import { RouterReducerState } from '@ngrx/router-store';

import { IUserState } from './user.state';
import { IConfigState } from './config.state';

export interface IAppState {
    router?: RouterReducerState,
    users: IUserState,
    config: IConfigState
}

export const initialAppState: IAppState = {
    users: null,
    config: null
}

export function getInitialState(): IAppState{
    return initialAppState;
}