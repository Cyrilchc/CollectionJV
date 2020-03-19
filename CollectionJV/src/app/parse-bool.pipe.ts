import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseBool'
})
export class ParseBoolPipe implements PipeTransform {

  transform(value: boolean, ...args: boolean[]): string {
    if(value == true){
      return "Oui";
    }else{
      return "Non";
    }
  }
}
