import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    LancamentosModule,
    PessoasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
