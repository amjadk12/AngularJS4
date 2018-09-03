import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/products-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
ProductListComponent ],
  imports: [
    BrowserModule,CommonModule,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }