import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderAvailable'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, type: number, active: number): any {
    if (active !== 1) {
      return value;
    }
    switch (type) {
      case 1:
        return value.filter(todoEdit => todoEdit.available);
      case 2:
        return value.filter(todoEdit => !todoEdit.available);
      default:
        return value ;
    }

  }

}
