import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { CartComponent } from './cart/cart.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { DetailsComponent } from './details/details.component';
import { CartService } from './services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    CartComponent,
    DisplayMovieComponent,
    DetailsComponent,
    AdminComponent,
    NotfoundComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
