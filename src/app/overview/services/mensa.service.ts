import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MealStore } from '../models/meal.store';
import { Mensa } from '../models/mensa';

@Injectable()
export class MensaService {

  private readonly url = '/api/mensas';

  constructor(private http: HttpClient, private store: MealStore) { }

  initialize() {
    this.http.get<Mensa[]>(this.url)
      .subscribe(mensas => this.store.setMensas(mensas));
  }

}
