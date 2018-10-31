import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { LaunchActionTypes, LaunchesLoaded, FilterLaunches, LaunchesFiltered } from './launch.actions';
import { Launch } from './../models';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  @Effect()
  public filter$ = this.actions$
    .ofType(LaunchActionTypes.FilterLaunches)
    .pipe(
      mergeMap(((action: FilterLaunches) =>
        this.api
          .getLaunches$()
          .pipe(map(launches => {
            const launchesFilter: Launch[] = launches.filter((launch: Launch) =>
              {
                let valido = false;
                valido = launch.status === action.payload;
                return valido;
              }
            );
            return new LaunchesFiltered(launchesFilter);
          }))
      )
    ));

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
