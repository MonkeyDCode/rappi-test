import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//FORMS
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


// NGRX
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'; 
import { environment } from '../environments/environment';
//import { appReducers } from './app.reducers';

//Services
import { AngularWebStorageModule } from 'angular-web-storage';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { LoaderComponent } from './components/general/loader/loader.component';
import { AlertComponent } from './components/alerts/alert/alert.component';
import { RappiComponent } from './components/rappi/rappi.component';
import { CategoriesComponent } from './components/rappi/categories/categories.component';
import { ProductsComponent } from './components/rappi/products/products.component';
import { OrderComponent } from './components/rappi/products/order/order.component';
import { FilterComponent } from './components/rappi/products/filter/filter.component';
import { CartComponent } from './components/cart/cart.component';
import { appReducers } from './app.reducers';
import { OrderPipe } from './pipes/order.pipe';
import { AddCartComponent } from './components/rappi/products/add-cart/add-cart.component';
import { StockOrderPipe } from './pipes/stock-order.pipe';
import { PriceOrderPipe } from './pipes/price-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    AlertComponent,
    RappiComponent,
    CategoriesComponent,
    ProductsComponent,
    OrderComponent,
    FilterComponent,
    CartComponent,
    OrderPipe,
    AddCartComponent,
    StockOrderPipe,
    PriceOrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
