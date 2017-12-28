﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';
import { AppModule } from './modules/app/app.module';

import { MDL } from './shared/utils';

const routes: Routes = [
    { path: '', redirectTo: 'main/0', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        MDL,
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class MainModule {
}