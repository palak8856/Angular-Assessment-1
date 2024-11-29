import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Product } from '../products.type';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;

  get redirectUrl() {
    return `/view/${this.product.id}`;
  }
}