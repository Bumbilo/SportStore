import {Injectable} from '@angular/core';
import {Cart} from './cart.model';

@Injectable()
export class Order {
  public id: number;
  public zip: string;
  public name: string;
  public city: string;
  public state: string;
  public address: string;
  public country: string;
  public shipped: string;

  constructor(public cart: Cart) {
  }

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = null;
  }

}

