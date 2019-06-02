import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { CartComponent } from "./cart/cart.component";
import { DisplayMovieComponent } from "./display-movie/display-movie.component";
import { DetailsComponent } from "./details/details.component";
import { CartService } from "./services/cart.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    NotfoundComponent,
    CartComponent,
    DisplayMovieComponent,
    DetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
