import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
  private _orders: Order[] = [];
  private _loaded: Boolean = false;

  constructor(private _dataSource: RestDataSource) {
  }

  loadOrders() {
    this._loaded = true;
    this._dataSource.getOrders()
      .subscribe(orders => this._orders = orders);
  }

  getOrders(): Order[] {
    if (!this._loaded) {
      this.loadOrders();
    }
    return this._orders;
  }

  saveOrders(order: Order) {
    return this._dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this._dataSource.updateOrder(order).subscribe((order) => {
      this._orders.splice(this._orders.findIndex(o => o.id === order.id), 1, order)
    });
  }

  deleteOrder(id: number) {
    this._dataSource.deleteOrder(id).subscribe(order => {
      this._orders.splice(this._orders.findIndex(o => id === o.id));
    });
  }

}

