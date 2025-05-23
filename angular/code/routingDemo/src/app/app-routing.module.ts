import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent} from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProjectComponent } from './project/project.component';
import { myguardGuard } from './myguard.guard';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'home',
    component: HomeComponentComponent,
    children: [
      { path: 'about', component: AboutPageComponent },
      { path: 'projects', component: ProjectsPageComponent },
    ],
  },
  { path: 'about', component: AboutPageComponent , canActivate:[myguardGuard]},
  {
    path: 'projects',
    loadChildren: () => import('./projects-page/projects-page.component')
      .then(m => m.ProjectsPageComponent)
  },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
