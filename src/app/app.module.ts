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
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { FooterComponent } from './footer/footer.component';
import { ConfimationDialogComponent } from './confimation-dialog/confimation-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostListComponent,
    PostFormComponent,
    PostViewComponent,
    ScrollableDirective,
    PrivacidadeComponent,
    InformacaoComponent,
    FooterComponent,
    ConfimationDialogComponent,
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [PaginationService , { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [ConfimationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
