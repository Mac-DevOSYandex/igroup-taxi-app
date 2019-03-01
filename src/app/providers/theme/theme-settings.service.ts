import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeSettings {
    private theme: BehaviorSubject<string>;
    constructor() {
        this.theme = new BehaviorSubject('light-theme');
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }

    setActiveTheme(value: any) {
        this.theme.next(value);
    }
}
