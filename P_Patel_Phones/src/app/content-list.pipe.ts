import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentList'
})
export class ContentListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
