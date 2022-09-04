import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExampleModule } from './third-module/material.module';
import { HomeComponent } from './home/home.component';
import { SidenavAutosizeExample } from './sidenav-autosize-example';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'array', component:SidenavAutosizeExample},
  {path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [HomeComponent, SidenavAutosizeExample],
  imports: [RouterModule.forRoot(routes),
    MatNativeDateModule,
    MaterialExampleModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
