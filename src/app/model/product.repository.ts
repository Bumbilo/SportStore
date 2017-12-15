import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';

@Injectable
export class ProductRepository {
  private _products: Product[] = [];
  private _categories: string[] = [];

  constructor(private _dataSource: StaticDataSource) {
    _dataSource.getProducts().subscribe(data => {
      this._products = data;
      this._categories = data
        .map((item) => item.category)
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this._products
      .filter(p => category == null || category === p.category);
  }

  getProduct(id: number): Product {
    return this._products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this._categories;
  }
}
