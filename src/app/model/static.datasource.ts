import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(2, 'Product 2', 'Category 2', 'Product 2 (Category 2)', 100),
    new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 3)', 100),
    new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 4)', 100),
    new Product(5, 'Product 5', 'Category 3', 'Product 5 (Category 5)', 100),
    new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 6)', 100),
    new Product(7, 'Product 7', 'Category 3', 'Product 7 (Category 7)', 100),
    new Product(8, 'Product 8', 'Category 1', 'Product 8 (Category 8)', 100),
    new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 9)', 100),
    new Product(10, 'Product 10', 'Category 3', 'Product 10 (Category 10)', 100),
    new Product(11, 'Product 11', 'Category 4', 'Product 11 (Category 11)', 100),
    new Product(12, 'Product 12', 'Category 4', 'Product 12 (Category 12)', 100),
    new Product(13, 'Product 13', 'Category 3', 'Product 13 (Category 13)', 100),
    new Product(14, 'Product 14', 'Category 4', 'Product 14 (Category 14)', 100),
    new Product(15, 'Product 15', 'Category 2', 'Product 15 (Category 15)', 100),
    new Product(16, 'Product 16', 'Category 1', 'Product 16 (Category 16)', 100),
    new Product(17, 'Product 17', 'Category 4', 'Product 17 (Category 17)', 100),
    new Product(18, 'Product 18', 'Category 3', 'Product 18 (Category 18)', 100),
    new Product(19, 'Product 19', 'Category 2', 'Product 19 (Category 19)', 100),
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }

  saveOrder(order: Order) {
    console.log(JSON.stringify(order));
    return Observable.from([order]);
  }
}
