import { Component } from '@angular/core';
import { ProductService } from '../products.service';
import { RouterLink } from '@angular/router';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  get allProducts() {
    return this.productService.getProducts();
  }
}