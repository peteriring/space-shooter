import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { MenuRoutes } from './menu.routes';

@NgModule({
  declarations: [MenuComponent],
  providers: [],
  imports: [MenuRoutes],
  bootstrap: [MenuComponent],
})
export class MenuModule {}
