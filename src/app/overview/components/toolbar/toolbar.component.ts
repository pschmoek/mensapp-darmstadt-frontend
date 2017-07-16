import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

import { Mensa } from '../../models/mensa';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {

  @Input() mensas: Mensa[];
  @Input() date: string;
  @Output() dateSelected = new EventEmitter<string>();
  dateControl = new FormControl();
  mensaControl = new FormControl(-1);

  ngOnInit() {
    this.dateControl.valueChanges.subscribe(s => {
      const date = moment(s).format('DD.MM.YYYY');
      this.dateSelected.emit(date);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dateControl.setValue(moment(this.date, 'DD.MM.YYYY'));
  }

  getMensaDisplayText(mensa: Mensa) {
    if (mensa.id === -1) {
      return 'alle';
    }

    return mensa.location + ' ' + mensa.subLocation;
  }

}
