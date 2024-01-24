import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CatalogHeaderComponent } from './components/catalog-header/catalog-header.component';
import { CatalogBodyComponent } from './components/catalog-body/catalog-body.component';
import { CatalogSideBarComponent } from './components/catalog-side-bar/catalog-side-bar.component';
import { CatalogSearchBarComponent } from './components/catalog-search-bar/catalog-search-bar.component';
import { CatalogCardsComponent } from './components/catalog-cards/catalog-cards.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogHeaderComponent,
    CatalogBodyComponent,
    CatalogSideBarComponent,
    CatalogSearchBarComponent,
    CatalogCardsComponent,
    PaginationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
