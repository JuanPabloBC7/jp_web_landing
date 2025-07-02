import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagesLayoutComponent } from './components/layouts/pages-layout/pages-layout.component';
import { HomeComponent } from './pages/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  },
  {
    path: 'projects',
    component: PagesLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  { 
    path: '**', 
    component: LandingPageComponent 
  }
];
