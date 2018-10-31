import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LaunchesState } from 'src/app/core/store/launch/launch.reducer';
import { ActivatedRoute } from '@angular/router';
import { FilterLaunches } from 'src/app/core/store/launch/launch.actions';

@Component({
  selector: 'ray-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private launchesStore: Store<LaunchesState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.launchesStore.dispatch( new FilterLaunches( id ));
  }

}
