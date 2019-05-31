import { Component, OnInit, Input } from '@angular/core';
import { FilterIDProductos } from 'src/app/redux/data.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { FilterNameProductos } from '../../../redux/data.actions';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() public categories;
  txtInput: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  filter(id, cat) {
    const accion = new FilterIDProductos(id, cat);
    this.store.dispatch(accion);
  }

  filtertext(id, cat) {
    if (this.txtInput.invalid) {
      return;
    }
    const accion = new FilterNameProductos(id, this.txtInput.value, cat);
    this.store.dispatch(accion);
    this.txtInput.setValue('');
  }

}
