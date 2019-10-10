import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/tabview';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule, TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
