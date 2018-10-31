import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ray-launch-css',
  templateUrl: './launch-css.component.html',
  styleUrls: ['./launch-css.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
