import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private productService: ProductService, private router: Router) {}

  newProductFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    availability: new FormControl('Available'),
  });

  onSubmit() {
    if (
      this.newProductFormGroup.invalid ||
      this.newProductFormGroup.value.name === '' ||
      this.newProductFormGroup.value.description === ''
    ) {
      return;
    }

    this.productService.addProduct({
      name: this.newProductFormGroup.value.name!,
      description: this.newProductFormGroup.value.description!,
    });

    this.newProductFormGroup.reset();
    this.router.navigate(['/']), { replaceUrl: true };
  }
}