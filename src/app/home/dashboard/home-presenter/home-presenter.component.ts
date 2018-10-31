import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { TypeStatusState } from '../../../core/store/type-status/type-status.reducer';
import { TypeStatus } from '../../../core/store/models';

@Component({
  selector: 'ray-home',
  templateUrl: './home-presenter.component.html',
  styleUrls: ['./home-presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePresenterComponent implements OnInit {

  constructor(private storeTypeStatus: Store<TypeStatusState>) { }

  public typesStatus$: Observable<TypeStatus[]>;

  ngOnInit() {
    this.typesStatus$ = this.storeTypeStatus.select('typeStatus')
      .pipe(map(
        typeStatusState => typeStatusState.typesStatus)
      );
  }

}
