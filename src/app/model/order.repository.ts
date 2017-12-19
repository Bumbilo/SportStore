import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class OrderRepository {
  private _orders: Order[] = [];

  constructor(private _dataSource: StaticDataSource) {
  }

  getOrders(): Order[] {
    return this._orders;
  }

  saveOrders(order: Order) {
    return this._dataSource.saveOrder(order);
  }
}

