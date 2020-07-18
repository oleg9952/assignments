import { FormControl } from '@angular/forms';
import { Observable, of} from 'rxjs';
import { map, debounceTime, delay } from 'rxjs/operators';

interface ValidationError {
    [key: string]: boolean;
}

export class CustomValidators {
    static prohibitedName(control: FormControl): ValidationError {
        const value = control.value ? control.value.toLowerCase() : null;
        if (['james', 'alex', 'pikachu', 'test'].includes(value)) {
            return {prohibitedName: true}
        }
        return null
    }

    static prohibitedNameAsync(control: FormControl): Promise<ValidationError | null> | Observable<ValidationError | null> {
        return of(['aquaman', 'asterix', 'batman', 'thor']).pipe(
            map(names => {
                const value = control.value ? control.value.toLowerCase() : null;
                if (names.includes(value)) {
                    return { 'prohibitedNameAsync': true }
                } else {
                    return null;
                }
            }),
            delay(1500)
        )
    }
}