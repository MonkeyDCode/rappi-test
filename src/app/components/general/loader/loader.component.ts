import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../../services/api.service';
import { SessionService} from '../../../services/storage.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { Router } from '@angular/router';
import { AgregarData } from '../../../redux/data.actions';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private http: ApiService,
    private store: Store<AppState>,
    private storage: SessionService,
    private router: Router) { }
    private data = {categories: [], products: [], viewlist: [], filtro: 'ninguno'};
  ngOnInit() {
    this.getCat();
  }

  saveData() {
    const accion = new AgregarData(this.data);
    this.store.dispatch(accion);
  }

  getCat(): void {
    this.http.get('categories.json')
      .then(data => {
        this.storage.set('categories', data);
        this.data.categories = data['categories'];
        this.getProd();
      })
      .catch (err => this.error(err));
  }
  getProd() {
    this.http.get('products.json')
      .then(data => {
        this.storage.set('products', data);
        this.data.products = data['products'];
        this.data.viewlist = data['products'];
        this.saveData();
        this.router.navigate(['dashboard']);
      })
      .catch (err => this.error(err));
  }
  error(err) {
    console.log('algo salio mal :c', err);
  }
}
