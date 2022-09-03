import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExampleModule } from '../material.module';
import { HomeComponent } from '../landing-page/home/home.component';
import { SidenavResponsiveExample } from './sidenav-responsive-example';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'array', component:SidenavResponsiveExample},
  {path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [HomeComponent, SidenavResponsiveExample],
  imports: [RouterModule.forRoot(routes),
    MatNativeDateModule,
    MaterialExampleModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
