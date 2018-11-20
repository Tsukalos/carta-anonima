import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostViewComponent } from './post-view/post-view.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'all',          component: PostListComponent },
  { path: 'write',        component: PostFormComponent },
  { path: 'r/:id',        component: PostViewComponent },
  { path: 'information',  component: InformacaoComponent },
  { path: 'privacy',      component: PrivacidadeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
