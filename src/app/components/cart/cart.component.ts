import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {

  cart = null;
  items: Cart[] = [];
  constructor(private storage: SessionService) { }

  ngOnInit() {
    this.cart = this.storage.get('cart');
    if (this.cart !== null) {
      this.cart.forEach(element => {
        this.items.push(new Cart(element.id,
                                  element.name,
                                  1,
                                  Number(element.price.replace('$', '').replace(',', '')),
                                  Number(element.price.replace('$', '').replace(',', '')),
                                  element));
      });
    }
  }

    add(id) {
      this.items.map(item =>  {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity++
          };
        }
          return {...item};
      });
    }

    remove(id) {
      this.items.map(item =>  {
        if (item.id === id) {
          if (item.quantity === 1) {
            alert('no se puede reducir la cantidad, si deseas eliminarlo haz click en eliminar');
            return;
          }
          return {
            ...item,
            quantity: item.quantity--
          };
        }
          return {...item};
      });
    }

    delete(id) {
      this.items = this.items.filter(m => {
        return m.id !== id;
      });
      const array =  this.items.map(a => a.item);
      this.storage.set('cart', array);
    }

    resume() {
      alert ('compra realizada con exito');
      this.storage.remove('cart');
    }
}

class Cart {
  name;
  quantity;
  price;
  subtotal;
  id;
  item;
  constructor(id, a, c, d, e, item) {
    this.id = id;
    this.name = a;
    this.quantity = c;
    this.price = d;
    this.subtotal = e;
    this.item = item;
  }
}
