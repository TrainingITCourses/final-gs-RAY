import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TypeStatus } from 'src/app/core/store/models';
import { Store } from '@ngrx/store';
import { TypeStatusState } from './../../core/store/type-status/type-status.reducer';
import { TypeStatusNameSelected } from './../../core/store/type-status/type-status.actions';

@Component({
  selector: 'ray-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {

  @Input() public status: TypeStatus;

  constructor(private typeStatusStore: Store<TypeStatusState>) { }

  ngOnInit() {
  }

  abrirEstado = (name: string) => {
    this.typeStatusStore.dispatch( new TypeStatusNameSelected( name ));
  }
}
