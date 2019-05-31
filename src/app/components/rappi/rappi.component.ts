import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { FilterIDProductos } from 'src/app/redux/data.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rappi',
  templateUrl: './rappi.component.html',
  styleUrls: ['./rappi.component.scss']
})
export class RappiComponent implements OnInit {

  public categories = [];
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.subscribe(state => {
     this.categories = state.data.categories;
     if (this.categories === undefined) {
      this.router.navigate(['/']);
     }
    });
  }

  filter(id, cat) {
    const accion = new FilterIDProductos(id, cat);
    this.store.dispatch(accion);
  }
}
