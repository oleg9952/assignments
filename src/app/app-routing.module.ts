import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AddPurchaseComponent } from './Pages/add-purchase/add-purchase.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthPageGuardService } from './Services/auth-page-guard.service'


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'add-purchase', component: AddPurchaseComponent, canActivate: [AuthGuardService] },
    { path: 'authentication', component: LoginComponent, canActivate: [AuthPageGuardService] },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }