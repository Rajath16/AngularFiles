import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UserSearchComponent } from './user-search/user-search.component';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employsearch',component:EmploySearchComponent,outlet:'data'},
  {path:'customer',component:CustomerComponent,outlet:'data'},
  {path:'customersearch',component:CustomerSearchComponent,outlet:'data'},
  {path:'user',component:UserComponent,outlet:'data'},
  {path:'usersearch',component:UserSearchComponent,outlet:'data'},
  
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploySearchComponent,
    CustomerSearchComponent,
    MenuComponent,
    LoginComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
