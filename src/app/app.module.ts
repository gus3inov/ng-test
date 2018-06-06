import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
