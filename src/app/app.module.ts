import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { FeatureComponent } from './feature/feature.component';
import { PopularComponent } from './popular/popular.component';
import { DiscoverComponent } from './discover/discover.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    FeatureComponent,
    PopularComponent,
    DiscoverComponent,
    AdditionalInfoComponent,
    ContactUsComponent,
    HowItWorksComponent,
    AllPagesComponent,
    BlogComponent,
    ProjectComponent,
    CreateProjectComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
