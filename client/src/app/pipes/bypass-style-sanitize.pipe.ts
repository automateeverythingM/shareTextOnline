import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';
@Pipe({
  name: 'bypassSanitize',
})
export class BypassStyleSanitizePipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {}

  transform(
    value: string,
    type:
      | 'SafeHtml'
      | 'SafeStyle'
      | 'SafeScript'
      | 'SafeUrl'
      | 'SafeResourceUrl'
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'SafeHtml':
        return this.sanitize.bypassSecurityTrustHtml(value);
      case 'SafeStyle':
        return this.sanitize.bypassSecurityTrustStyle(value);
      case 'SafeScript':
        return this.sanitize.bypassSecurityTrustScript(value);
      case 'SafeUrl':
        return this.sanitize.bypassSecurityTrustUrl(value);
      case 'SafeResourceUrl':
        return this.sanitize.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
