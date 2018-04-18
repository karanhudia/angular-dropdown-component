import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'GetSelectedNamePipe'})

export class GetSelectedNamePipe implements PipeTransform {
  transform(selectedOption) : string {
    return typeof selectedOption == 'object' ? selectedOption.name : selectedOption;
  }
}
