import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundComponent, SplashComponent } from './@core/components';
import { Loader } from './@core/services';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, SplashComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
  ],
  providers: [Loader],
  bootstrap: [AppComponent],
})
export class AppModule {}
