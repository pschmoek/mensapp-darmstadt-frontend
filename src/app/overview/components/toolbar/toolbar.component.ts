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
  @Input() filteredMensaId: number;
  @Output() dateSelected = new EventEmitter<string>();
  @Output() mensaSelected = new EventEmitter<number>();
  dateControl = new FormControl();
  mensaControl = new FormControl();

  ngOnInit() {
    this.dateControl.valueChanges.subscribe(s => {
      const date = moment(s).format('DD.MM.YYYY');
      this.dateSelected.emit(date);
    });
    this.mensaControl.valueChanges.subscribe(v => {
      this.mensaSelected.emit(v);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.date && (this.date !== changes.date.currentValue || changes.date.isFirstChange())) {
      this.dateControl.setValue(moment(this.date, 'DD.MM.YYYY'));
    }
    if (changes.filteredMensaId && this.mensaControl.value !== changes.filteredMensaId.currentValue) {
      this.mensaControl.setValue(this.filteredMensaId);
    }
  }

  getMensaDisplayText(mensa: Mensa) {
    return mensa.id === -1 ? 'alle' : mensa.location + ' ' + mensa.subLocation;
  }

}
