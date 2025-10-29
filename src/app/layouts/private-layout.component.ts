import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-layout',
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `
})
export class PrivateLayoutComponent {}