import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public logoPath: string = `${environment.assetUrl}/logo/Logo-3D.gif`;
}
