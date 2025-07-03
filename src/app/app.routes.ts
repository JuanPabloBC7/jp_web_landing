import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagesLayoutComponent } from './components/layouts/pages-layout/pages-layout.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SkillsNToolsComponent } from './pages/landing-page/skills-n-tools/skills-n-tools.component';
import { WorkComponent } from './pages/landing-page/work/work.component';
import { ContactUsComponent } from './pages/landing-page/contact-us/contact-us.component';
import { NotesComponent } from './pages/pages/notes/notes.component';
import { ExperienceComponent } from './pages/pages/experience/experience.component';
import { PluginsNToolsComponent } from './pages/pages/plugins-n-tools/plugins-n-tools.component';

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
      },
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
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'plugins-n-tools',
        component: PluginsNToolsComponent
      }
    ]
  },
  { 
    path: '**', 
    component: LandingPageComponent 
  }
];
