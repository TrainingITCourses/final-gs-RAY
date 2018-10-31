import { Launch, initialLaunch } from './../models';
import { LaunchActions, LaunchActionTypes } from './launch.actions';
import { shiftInitState } from '@angular/core/src/view';

export interface LaunchesState {
  launches: Launch[];
  launchesFiltered: Launch[];
  launchSelected: Launch;
}

export const initialState: LaunchesState = {
  launches: [],
  launchesFiltered: [],
  launchSelected: initialLaunch
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload};
    case LaunchActionTypes.FilterLaunches:
      return { ...state, launchesFiltered: [] };
    case LaunchActionTypes.LaunchesFiltered:
      return { ...state, launchesFiltered: action.payload};
    case LaunchActionTypes.GetLaunch:
      const nState1 = { ...state};
      if (nState1.launchesFiltered) {
        nState1.launchesFiltered.forEach(
          launch => {
            if (launch.id === action.payload) {
              nState1.launchSelected = launch;
            }
          }
        );
      }
      return nState1;
    case LaunchActionTypes.Ordenar:
      const nState2 = { ...state};
      nState2.launchesFiltered.sort(function(o1, o2) {
        if (o1.date < o2.date) { return -1 * action.payload; }
       if (o1.date > o2.date) { return 1 * action.payload; }
       return 0;
      });
      return nState2;
    default:
      return state;
  }
}
