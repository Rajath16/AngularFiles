import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  addCustomer(customer : Customer) : Observable<string> {
    return this._http.post("http://localhost:8080/HibernateRestCus/webapi/customer/customerInsert/",customer).
    map((res : Response) => res.text());
  }
  constructor(private _http : Http) { }
}
