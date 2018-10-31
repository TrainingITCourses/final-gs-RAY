import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LaunchesState } from '../../../core/store/launch/launch.reducer';
import { Launch } from '../../../core/store/models';

@Component({
  selector: 'ray-state',
  templateUrl: './state-presenter.component.html',
  styleUrls: ['./state-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatePresenterComponent implements OnInit {

  constructor(private launchesStore: Store<LaunchesState>) { }

  public launches$: Observable<Launch[]>;

  ngOnInit() {
    this.launches$ = this.launchesStore.select('launch')
      .pipe(map(
        launchesState => launchesState.launchesFiltered ));
  }

}
