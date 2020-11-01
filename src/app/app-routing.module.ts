import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { AuthGuard } from './shared/auth/auth-guard.service';

const routes : Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path : '',
    component : FullComponent,
    data : {title : 'full Views'},
    children : Full_ROUTES,
    canActivate : [AuthGuard]
  },
  { 
    path: '', 
    component: ContentComponent, 
    data: { title: 'content Views' }, 
    children: CONTENT_ROUTES, 
    canActivate: [] 
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
