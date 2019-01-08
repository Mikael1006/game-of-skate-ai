import { Pipe, PipeTransform } from '@angular/core';
import { sprintf } from 'sprintf-js';
/*
 * Format the text
 *
 * Usage:
 *   value | textFormat:
 * Example:
 *   {{ 'Hello %s' | textFormat:'World' }}
 *   formats to: 'Hello World'
*/
@Pipe({name: 'textFormat'})
export class TextFormatPipe implements PipeTransform {
  transform(value: string, ...args: Array<any>): number {
    return sprintf(value, ...args);
  }
}