import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LaunchesState } from '../../../core/store/launch/launch.reducer';
import { Launch } from '../../../core/store/models';

@Component({
  selector: 'ray-launch',
  templateUrl: './launch-presenter.component.html',
  styleUrls: ['./launch-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchPresenterComponent implements OnInit {

  constructor(private launchesStore: Store<LaunchesState>) { }

  public launches$: Observable<Launch[]>;

  ngOnInit() {
    this.launches$ = this.launchesStore.select('launch')
      .pipe(map(
        launchesState => launchesState.launchSelected ));
  }

}
