import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface EditCanDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable({
    providedIn: 'root'
})
export class EditDeactivateGuardService implements CanDeactivate<EditCanDeactivate> {
    canDeactivate(component: EditCanDeactivate) {
        return component.canDeactivate();
    }
}