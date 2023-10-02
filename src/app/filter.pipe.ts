import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(produit: any, ...searchText: any[]): any {
    if(searchText == undefined) return produit;
    
  }

}
