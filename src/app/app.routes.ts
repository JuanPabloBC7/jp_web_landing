import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      { 
        path: '**', 
        component: LandingPageComponent 
      }
    ]
  }
];
