import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let string1: String[] = req.url.split("/");

        if (string1.includes("login") || string1.includes("open") || string1.includes("sign-up")) {
            return next.handle(req);
        }

        var preduzece = JSON.parse(localStorage.getItem('trenutnoPreduzece'));
        var token1 = preduzece.token;

        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set("Authorization", token1) });

        //send the newly created request
        return next.handle(authReq);
      
    }
}