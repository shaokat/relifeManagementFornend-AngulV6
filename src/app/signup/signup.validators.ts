import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';


export class UsernameValidators {

   cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if( (control.value as string).indexOf(' ') !== -1) {
      return {
        cannotContainSpace: true
      };
    }
    return null;
  }

   shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

}