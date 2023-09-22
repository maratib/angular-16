import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      // { path: 'landging', redirectTo: '/landing', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      // { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
      // { path: 'properties', loadChildren: () => import('./pages/properties/properties.module').then(m => m.PropertiesModule) },
      // { path: 'agents', loadChildren: () => import('./pages/agents/agents.module').then(m => m.AgentsModule) },
      // { path: 'compare', loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule) },
      // { path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) },
      // { path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) },
      // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      // { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
      // { path: 'terms-conditions', loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule) },
      // { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) }, 
      // { path: 'submit-property', loadChildren: () => import('./pages/submit-property/submit-property.module').then(m => m.SubmitPropertyModule) }   
    ]
  },
  // { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  // { path: 'lock-screen', component: LockScreenComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
