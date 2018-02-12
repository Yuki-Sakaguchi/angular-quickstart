import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grep'
})
export class GrepPipe implements PipeTransform {
  transform(values: any[], callback: (item: any) => boolean) {
    if (!Array.isArray(values)) {
      return values;
    }

    return values.filter(callback);
  }
}
