import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './users-list/user/user.component';

import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [AppComponent, UsersListComponent, UserComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
