import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
// tslint:disable: no-inferrable-types
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

      constructor(private productService: ProductService) {
      }

      ngOnInit(): void {
        console.log('In OnInit');
        this.productService.getProducts().subscribe(
          products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => this.errorMessage = error
        );
      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((p: IProduct) =>
          p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }
}
