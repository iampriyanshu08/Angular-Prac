import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name:string = "";
   data = "Homelander";
   

constructor(){
  console.log("constructor callled");
  
}

  ngOnChanges(changes: SimpleChanges): void {           //chnages is an object which type is simple change nd the chnaged value is in it
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("onchanges called", changes);
    
  }

  ngOnInit(): void {
    console.log("oninit called");
    
    
  }

  ngAfterViewInit(): void {
    console.log("ui has been rendered");
    
    
  }

  ngAfterContentChecked(): void {
    
    console.log("after component re rendered");
    
  }

  changeData(){
    this.data = "Butcher"
  }


  ngOnDestroy(): void {
    console.log("component is destroyed");
    
  }
}
