import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'IPhone 16', description: 'With Appple Intelligence', price: 1200 },
    { id: 2, name: 'MSI Laptop', description: 'High performance gaming laptop', price: 1600 },
    { id: 3, name: 'Boat Headphones', description: 'Noise cancelling headphones', price: 300 }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
