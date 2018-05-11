import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarClubes'
})
export class FiltrarClubesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      v => v.nome.toLowerCase().indexOf(filter) != -1
    );
  }

}
