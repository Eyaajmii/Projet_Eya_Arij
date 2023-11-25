import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

  transform(nom:string): string {
    return nom.charAt(0).toUpperCase() + nom.slice(1);
  }

}
