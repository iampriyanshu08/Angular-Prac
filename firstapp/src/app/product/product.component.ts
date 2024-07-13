import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() pname:string = ""; 
  @Input() imgUrl:string= "";   // data is coming from app component via prop for this component. it is an input variable
}
