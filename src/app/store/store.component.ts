import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;

  constructor(private _repository: ProductRepository) {
  }

  get products(): Product[] {
    return this._repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this._repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  ngOnInit() {
  }

}
