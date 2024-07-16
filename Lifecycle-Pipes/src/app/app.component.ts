import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { StarPipe } from './star.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,CommonModule,StarPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 pname = "iphone13";
showProd = true;
name = "ASHU"
price= 20000;
animal = "dog"

 changepname(){
this.pname = "Samsung S24";
 }

 toggleProds(){
  if(this.showProd==true){
    this.showProd=false
  }
  else{
    this.showProd=true
  }
 }
}
