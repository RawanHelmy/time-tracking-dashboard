import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ReportCardComponent,
    CardsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
