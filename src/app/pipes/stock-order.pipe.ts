import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockOrder'
})
export class StockOrderPipe implements PipeTransform {

  transform(value: any, type: number, active: number): any {
    if (active === 3) {
      return value.filter(todoEdit => todoEdit.quantity < type);
    }
    return value;
  }
}
