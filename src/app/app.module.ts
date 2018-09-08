import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/products-list.component';
import {CommonModule} from '@angular/common';
import { ConvertToSpacesPipe } from "src/app/ConvertToSpacesPipe";
import {starComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
ProductListComponent,
ConvertToSpacesPipe,
starComponent
],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }