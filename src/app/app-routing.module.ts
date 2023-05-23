import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthorizedPageComponent } from './pages/unauthorized-page/unauthorized-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'landingpage',
    component: CommonComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPageComponent,
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
