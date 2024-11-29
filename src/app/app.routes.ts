import { Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'view/:id',
    component: ViewProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    path: '',
    component: ProductListComponent,
  },
];