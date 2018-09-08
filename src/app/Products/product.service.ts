import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpResponse } from "selenium-webdriver/http";


@Injectable({
    providedIn:'root'
})
export class ProductService{
    private productUrl='api/products/products.json';
constructor(private http: HttpClient){
    return 
}

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All'+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage='An error occur: ${err.error.message}';
        }
        else{
            errorMessage='Error returned respond code:${err.status}, Message: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}