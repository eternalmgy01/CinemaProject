import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComentsComponent } from './components/coments/coments.component';
import { WritecommentComponent } from './components/writecomment/writecomment.component';
import { NewsComponent } from './components/news/news.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MaincontentComponent},
  {path: 'news', component: NewsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    ComentsComponent,
    WritecommentComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
