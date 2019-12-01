import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyRegisterComponent } from './property/property-register/property-register.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "properties", component: PropertyListComponent },
  { path: "properties/register", component: PropertyRegisterComponent },
  { path: "properties/details", component: PropertyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
