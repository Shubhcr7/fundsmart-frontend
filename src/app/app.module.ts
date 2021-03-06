import {CommonModule} from '@angular/common';
import { HttpserviceService } from './httpservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { AllPagesComponent } from './all-pages/all-pages.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApprovefinalizeComponent } from './approvefinalize/approvefinalize.component';
import { AngularFileUploaderModule} from "angular-file-uploader";

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
    AllPagesComponent,
    ProjectComponent,
    CreateProjectComponent,
    CategoriesComponent,
    SearchResultComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ApprovefinalizeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
