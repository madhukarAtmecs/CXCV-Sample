import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: 'landingpage', component:  CommonComponent},
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {path:'**',
redirectTo:'login',
pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }