import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {
  dateControl = new FormControl();
  mensaControl = new FormControl();
  @Input() mensas = [{name: 'alle', sublocation: '', id: -1}];
  @Input() date: string;
  @Output() dateSelected = new EventEmitter<string>();

  ngOnInit() {
    this.dateControl.valueChanges.subscribe(s => {
      const date = moment(s).format('DD.MM.YYYY');
      this.dateSelected.emit(date);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dateControl.setValue(moment(this.date, 'DD.MM.YYYY'));
  }

}
