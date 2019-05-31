import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SortData } from '../../../redux/data.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  filtro = '';
  order = '';
  filtered = 0;
  minPrice = 0;
  maxPrice = 1;
  availability = 0;
  stockQuantity = 1;

  constructor(private store: Store<AppState>) { }

  resetFilter() {
    this.filtered = 0;
    this.minPrice = 0;
    this.maxPrice = 0;
    this.availability = 0;
    this.stockQuantity = 0;
  }

  ngOnInit() {
    this.store.subscribe(state => {
     this.products = state.data.viewlist;
     this.filtro = state.data.filtro;
     this.order = '';
    });
  }

  sorter(sort) {
    const accion = new  SortData(sort);
    this.store.dispatch(accion);
    this.order = sort;
  }

}
