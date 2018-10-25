import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { PostViewComponent } from './post-view/post-view.component';
import { ScrollableDirective } from './scrollable.directive';
import { PaginationService } from './pagination.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostListComponent,
    PostFormComponent,
    PostViewComponent,
    ScrollableDirective
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
