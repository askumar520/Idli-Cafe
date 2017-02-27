import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {ProductListComponent} from "./products/product-list.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        //HttpModule
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }