import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { SessionService } from '../../../../services/storage.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  @Input() item = {
    id: '',
    available: false,
  };
  constructor(private storage: SessionService) { }

  ngOnInit() {
  }
  addToCart() {
    let cart = this.storage.get('cart');
    if ( cart == null) {
      cart = [];
    }
    const idx = _.findIndex(cart, ['id', this.item.id]);
    if (idx > -1) {
      alert('producto ya añadido');
    } else {
      if (this.item.available) {
        cart.push(this.item);
        alert('se añadió el producto');
      } else {
        alert('producto sin stock');
      }
    }
    this.storage.set('cart', cart);
  }

}
