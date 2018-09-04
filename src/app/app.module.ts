import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/products-list.component';
import {CommonModule} from '@angular/common';
import { ConvertToSpacesPipe } from "src/app/ConvertToSpacesPipe";

@NgModule({
  declarations: [
    AppComponent,
ProductListComponent,
ConvertToSpacesPipe ],
  imports: [
    BrowserModule,CommonModule,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }