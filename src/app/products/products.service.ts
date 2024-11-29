import { Injectable } from '@angular/core';
import { NewProduct, type Product } from './products.type';
@Injectable({
  providedIn: 'root',
})

export class ProductService{
    private products:Product[] = [
        {
            id:"1",
            name: "Photoframe",
            description: "This is a beautiful photoframe with flower borders.",
            availability: "Available",
        },
        {
            id:"2",
            name: "OnePlus Bullett Wireless Earphones",
            description: "Bullett earphones with active noise cancellation.",
            availability: "Out of Stock",
        },
        {
            id:"3",
            name: "Hydra 10.0 Keyboard",
            description: "Mechanical Keyboard with RGB lights.",
            availability: "Available",
        },
        {
            id:"4",
            name: "V8 Wireless Mouse",
            description: "Wireless mouse with traditional design and ergonomically suitable",
            availability: "Out of Stock",
        }
    ]

    constructor(){
        const products= localStorage.getItem("products");

        if(products){
            this.products = JSON.parse(products);
        }
    }

    saveProducts() {
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    
      getProducts() {
        return this.products;
      }
    
      getProductById(id: string) {
        return this.products.find((product) => product.id === id);
      }
    
      addProduct(product: NewProduct) {
        const id = this.products.length + 1;
        this.products.push({
          ...product, id: id.toString(),
          availability: "Available"
        });
        this.saveProducts();
      }
    
      updateProduct(product: Product) {
        this.products = this.products.map((prod) => (prod.id === product.id ? product : prod));
        this.saveProducts();
      }
}