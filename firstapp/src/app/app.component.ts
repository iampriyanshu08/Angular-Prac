import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Priyanshu Utsahi';
  title = 'Angular';
  imageurl =
    'https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg';
  inptyp = 'password';

  printData() {
    console.log('btn clicked');
    this.isAvailable=!this.isAvailable;
    console.log(this.isAvailable)
  }
  isAvailable = false;
}
