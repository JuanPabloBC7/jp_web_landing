import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagesLayoutComponent } from './components/layouts/pages-layout/pages-layout.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SkillsNToolsComponent } from './pages/landing-page/skills-n-tools/skills-n-tools.component';
import { WorkComponent } from './pages/landing-page/work/work.component';
import { ContactUsComponent } from './pages/landing-page/contact-us/contact-us.component';
import { NotesComponent } from './pages/pages/notes/notes.component';
import { PluginsNToolsComponent } from './pages/pages/plugins-n-tools/plugins-n-tools.component';
import { FrontendComponent } from './pages/pages/experience/frontend/frontend.component';
import { BackendComponent } from './pages/pages/experience/backend/backend.component';
import { DatabaseComponent } from './pages/pages/experience/database/database.component';
import { CaseStudiesComponent } from './pages/landing-page/case-studies/case-studies.component';
import { CareerEvolutionComponent } from './pages/landing-page/career-evolution/career-evolution.component';

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
        path: 'about-us',
        component: HomeComponent
      },
      {
        path: 'skills-&-tools',
        component: SkillsNToolsComponent
      },
      {
        path: 'works',
        component: WorkComponent
      },
      {
        path: 'career-evolution',
        component: CareerEvolutionComponent
      },
      {
        path: 'case-studies',
        component: CaseStudiesComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'experience/frontend',
        component: FrontendComponent
      },
      {
        path: 'experience/backend',
        component: BackendComponent
      },
      {
        path: 'experience/database',
        component: DatabaseComponent
      },
      {
        path: 'plugins-n-tools',
        component: PluginsNToolsComponent
      },
      {
        path: '**',
        component: HomeComponent
      },
    ]
  },
  { 
    path: '**', 
    component: LandingPageComponent 
  }
];
