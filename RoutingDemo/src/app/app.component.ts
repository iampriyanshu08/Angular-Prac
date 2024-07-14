import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet,RouterModule],       //routeroutlet is object in angular for routing  //routermodule is used in nav bar making links to tohe components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RoutingDemo';
}
