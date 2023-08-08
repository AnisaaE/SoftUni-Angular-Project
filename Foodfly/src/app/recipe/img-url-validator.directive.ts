import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
@Directive({
  selector: '[appImgUrlValidator]'
})
export class ImgUrlValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    const imageUrl = control.value;

    if (imageUrl && (typeof imageUrl !== 'string' || !imageUrl.startsWith('http'))) {
      return { invalidImageUrl: true };
    }

    return null;
  }

}
