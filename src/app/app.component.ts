import { Component } from '@angular/core';
import { Loader } from './@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoading: boolean = true;

  constructor(private readonly loader: Loader) {
    this.loader.whenCompleted(() =>
      setTimeout(() => {
        this.isLoading = false;
      }, 2000)
    );
  }
}
