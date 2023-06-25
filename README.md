# Pagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

# Quick Start
npm install ngx-pagination --save<br>
Angular Version<br>
This library is built to work with Angular 13+. If you need to support an earlier version of Angular, please use v5.x.<br>

# Simple Example<br>
// app.module.ts<br>
import {NgModule} from '@angular/core';<br>
import {BrowserModule} from '@angular/platform-browser';<br>
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module<br>
import {MyComponent} from './my.component';<br>

@NgModule({
    imports: [BrowserModule, NgxPaginationModule], // <-- include it in your app module<br>
    declarations: [MyComponent],<br>
    bootstrap: [MyComponent]<br>
})
export class MyAppModule {}<br>
// my.component.ts<br>
import {Component} from '@angular/core';<br>


