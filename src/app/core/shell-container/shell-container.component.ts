import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store';
import { LoadTypeStatus } from '../store/type-status/type-status.actions';
import { LoadLaunches } from '../store/launch/launch.actions';
import { ChangeVersion } from '../store/version/version.actions';

@Component({
  selector: 'ray-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.css']
})
export class ShellContainerComponent implements OnInit {
  constructor(
    private store: Store<State>,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.loadData();
    this.observeVersions();
  }

  private loadData = () => {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadTypeStatus());
  }

  private observeVersions = () => {
    const actualVersion = '1.5.0';
    this.store.dispatch(new ChangeVersion(actualVersion));

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        if (window.confirm('Una nueva versión está disponible. Pulse OK para instalarla.')) {
          window.location.reload();
        }
      });
    }
  }

  checkForUpdate = () => {
    this.swUpdate.checkForUpdate()
      .then(() => {console.log('No hay nueva actualización'); })
      .catch(err => {console.error(err); });
  }

}
