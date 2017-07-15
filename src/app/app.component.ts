import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('DE-de');
  }
}
