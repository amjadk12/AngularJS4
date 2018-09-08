
import {Component} from '@angular/core';
import { ProductListComponent } from './Products/products-list.component';


@Component ({
  selector : 'pm-root',
  template : `
    <div>
      <div><pm-products></pm-products></div>
    </div>
  `
 })

export class AppComponent{
  pageTitle: string = 'Amjad Page Title';
  pageDesc: string = 'Hey!! this is my first module';
}
