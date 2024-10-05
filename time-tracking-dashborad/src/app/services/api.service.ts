import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getProductsList(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
  }
}
