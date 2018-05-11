import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarClubes'
})
export class OrdenarClubesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length === 0 || args === undefined) {
      return value;
    }

    if(args === "posicao") {
      return value.sort((a, b) => a.posicao - b.posicao);
    }
    else {
      return null;
    }
  }

}
