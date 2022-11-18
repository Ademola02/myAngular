import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { NotFoundError } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ibrahimComponent } from './ibrahim/ibrahim.component';
// import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:ibrahimComponent},
  // {path: 'nav',component:NavComponent},
  {path: 'about/:id/:name',component:AboutComponent},
  {path: 'about',component:AboutComponent},
  {path: 'wallet',component:WalletComponent},
  {path: 'dashboard',component:DashboardComponent,
  children:[
    {path: '', component:WalletComponent},
    {path: 'profile',component:ProfileComponent},
    ],canActivate:[AuthGuard]
  },
   {path: '**',component:NotFoundError},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
