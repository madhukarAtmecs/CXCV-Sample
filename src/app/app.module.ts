import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonComponent } from './common/common.component';
import { SideNavComponent } from './ui-components/side-nav/side-nav.component';
import { UnauthorizedPageComponent } from './pages/unauthorized-page/unauthorized-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CommonComponent,
    LoginPageComponent,
    SideNavComponent,
    UnauthorizedPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
