import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PMS';
  name = 'Priyanshu';
  age = 22;

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      brand: 'Dell',
      price: 799.99,
      inStock: true,
   
    },
    {
      id: 2,
      name: 'Smartphone',
      brand: 'Apple',
      price: 999.99,
      inStock: false,
     
    },
    {
      id: 3,
      name: 'Headphones',
      brand: 'Sony',
      price: 199.99,
      inStock: true,
     
    },
    {
      id: 4,
      name: 'Coffee Maker',
      brand: 'Keurig',
      price: 129.99,
      inStock: true,
      
    },
    {
      id: 5,
      name: 'Smartwatch',
      brand: 'Samsung',
      price: 249.99,
      inStock: true,
      
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      brand: 'Logitech',
      price: 29.99,
      inStock: true,
     
    },
    {
      id: 7,
      name: 'External Hard Drive',
      brand: 'Seagate',
      price: 89.99,
      inStock: true,
      
    },
    {
      id: 8,
      name: 'Digital Camera',
      brand: 'Canon',
      price: 499.99,
      inStock: false,
      
    },
    {
      id: 9,
      name: 'Bluetooth Speaker',
      brand: 'JBL',
      price: 59.99,
      inStock: true,
      
    },
    {
      id: 10,
      name: 'Tablet',
      brand: 'Samsung',
      price: 399.99,
      inStock: true,
      
    }
  ]

  changeName() {
    this.name = 'Ashu';
    this.age = 99;
  }
}
