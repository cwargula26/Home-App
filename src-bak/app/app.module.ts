import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyRegisterComponent } from './property/property-register/property-register.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyRegisterComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
