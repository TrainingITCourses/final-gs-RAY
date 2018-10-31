import { ActionReducerMap, MetaReducer} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromTypeStatus from './type-status/type-status.reducer';
import * as fromVersion from './version/version.reducer';

export interface State {
  typeStatus: fromTypeStatus.TypeStatusState;
  launch: fromLaunch.LaunchesState;
  version: fromVersion.VersionState;
}

export const reducers: ActionReducerMap<State> = {
  typeStatus: fromTypeStatus.reducer,
  launch: fromLaunch.reducer,
  version: fromVersion.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
