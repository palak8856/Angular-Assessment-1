import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../products.service';
import { type Product } from '../products.type';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  product!: Product | null;
  editFormGroup!: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(id!)!;
    const editFormGroup = new FormGroup({
      id: new FormControl(this.product?.id),
      name: new FormControl(this.product?.name, Validators.required),
      description: new FormControl(this.product?.description, Validators.required),
      availability: new FormControl(this.product?.availability),
    });
    this.editFormGroup = editFormGroup;
  }

  isFormDirty() {
    return (
      JSON.stringify(this.product) !==
      JSON.stringify({
        id: this.editFormGroup.value.id,
        name: this.editFormGroup.value.name,
        description: this.editFormGroup.value.description,
        availability: this.editFormGroup.value.availability,
      })
    );
  }

  onSubmit() {
    this.productService.updateProduct({
      id: this.product!.id,
      name: this.editFormGroup.value.name!,
      description: this.editFormGroup.value.description!,
      availability: this.editFormGroup.value.availability!,
    });

    this.router.navigate(['/'], { replaceUrl: true });
  }
}