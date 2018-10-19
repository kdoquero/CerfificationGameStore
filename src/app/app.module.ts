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
import { Platform1Component } from './platform1/platform1.component';
import { Platform2Component } from './platform2/platform2.component';
import { Platform3Component } from './platform3/platform3.component';
import { Platform4Component } from './platform4/platform4.component';
import { CartComponent } from './cart/cart.component';

const routes:Routes = [
  { path: '', component: HomepageComponent},
  { path: 'register', component: SignUpComponent},
  {path: 'details/:id/:name',component:DetailsComponent },
  {path: 'plateform/ps4',component:Platform1Component },
  {path: 'plateform/XboxOne',component:Platform2Component },
  {path: 'plateform/Psvita',component:Platform3Component },
  {path: 'plateform/NSwitch',component:Platform4Component},
  {path: 'cart',component:CartComponent},


  


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
    PlatformComponent,
    Platform1Component,
    Platform2Component,
    Platform3Component,
    Platform4Component,
    CartComponent
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
