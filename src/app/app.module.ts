import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ibrahimComponent } from './ibrahim/ibrahim.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { ComponentsAnotherComponent } from './components-another/components-another.component';
import { ConverterPipe } from './converter.pipe';
import { FormValidationComponent } from './Components/form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ibrahimComponent,
    ProfileComponent,
    WalletComponent,
    DashboardComponent,
    AboutComponent,
    NavComponent,
    ComponentsAnotherComponent,
    ConverterPipe,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
