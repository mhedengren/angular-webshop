import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
