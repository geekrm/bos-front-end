import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { LastloggedService } from './services/lastlogged.service';
import { SigninService } from './services/signin.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [SigninService, AuthService, LastloggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
