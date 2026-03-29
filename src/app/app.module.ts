import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './ui/pages/contact/contact.component';
import { HeaderComponent } from './ui/layout/header/header.component';
import { FooterComponent } from './ui/layout/footer/footer.component';
import { NavigationComponent } from './ui/layout/navigation/navigation.component';
import { Routes, provideRouter } from '@angular/router';
import { PokemonService } from './core/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './ui/shared/card/card.component';
import { HomeComponent } from './ui/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideRouter(routes), PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
