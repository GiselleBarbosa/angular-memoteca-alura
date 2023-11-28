import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateNotesComponent } from './pages/create-notes/create-notes.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { ListNotesComponent } from './pages/list-notes/list-notes/list-notes.component';
import { NgModule } from '@angular/core';
import { CardsComponent } from './pages/list-notes/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListNotesComponent,
    CreateNotesComponent,
    CardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
