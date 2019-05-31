import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceOrder'
})
export class PriceOrderPipe implements PipeTransform {

  transform(value: any, type: number, active: number): any {
    if (active === 2) {
      return value.filter(todoEdit => Number(todoEdit.price.replace('$', '').replace(',', '') < type));
    }
    return value;
  }

}
