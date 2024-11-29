import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, Router } from '@angular/router';

import { ProductService } from '../products.service';
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css',
})
export class ViewProductComponent {
  id!: string | null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get productDetails() {
    console.log(this.id);
    return this.productService.getProductById(this.id!);
  }

  get redirectUrl() {
    return `/edit/${this.id}`;
  }

 
}