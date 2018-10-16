import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AccessbarComponent } from './accessbar/accessbar.component';
import { LastReleasedComponent } from './last-released/last-released.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardComponent } from './card/card.component';
import { RssReaderComponent } from './rss-reader/rss-reader.component';
import { UiModule } from './ui/ui.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VideoComponent } from './video/video.component';
import { SafePipe } from './safe.pipe';
import { DetailsComponent } from './details/details.component';
import { PlatformComponent } from './platform/platform.component';

const routes:Routes = [
  { path: '', component: HomepageComponent},
  { path: 'register', component: SignUpComponent},
  {path: 'details/:id/:name',component:DetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    AccessbarComponent,
    LastReleasedComponent,
    CardGroupComponent,
    CardComponent,
    RssReaderComponent,
    SignUpComponent,
    VideoComponent,
    SafePipe,
    DetailsComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpClientJsonpModule,
    RouterModule.forRoot(routes),
    UiModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
