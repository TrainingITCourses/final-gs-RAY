import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LaunchesState } from 'src/app/core/store/launch/launch.reducer';
import { TypeStatusState } from './../../store/type-status/type-status.reducer';
import { VersionState } from './../../store/version/version.reducer';
import { Ordenar } from './../../store/launch/launch.actions';

@Component({
  selector: 'ray-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  @Output() public CheckForUpdate = new EventEmitter();

  private _paginaActual: number;

  public pag$ = new BehaviorSubject<number>(this._paginaActual);
  public launches$: Observable<any>;
  public typeStatus$: Observable<any>;
  public version$: Observable<any>;

  constructor(private location: Location,
              private router: Router,
              private storeLaunches: Store<LaunchesState>,
              private storeVersion: Store<VersionState>,
              private storeTypeStatus: Store<TypeStatusState>) {

    const that = this;
    this.launches$ = this.storeLaunches.select('launch');
    this.version$ = this.storeVersion.select('version');

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {

        if (e.url.indexOf('launch') >= 0 ) {
          that._paginaActual = 2;
        } else {
          if (e.url.indexOf('state') >= 0 ) {
            that._paginaActual = 1;
            that.typeStatus$ = this.storeTypeStatus.select('typeStatus');
          } else {
            that._paginaActual = 0;
          }
        }
        that.pag$.next(that._paginaActual);
      }
    });
  }

  ngOnInit() {
  }

  atras = () => {
    this.location.back();
  }

  checkForUpdate = () => {
    this.CheckForUpdate.next();
  }

  ordenar = (id) => {
    this.storeLaunches.dispatch( new Ordenar( id ) );
  }

}
