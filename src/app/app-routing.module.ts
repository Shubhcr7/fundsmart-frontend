
import { ApprovefinalizeComponent } from './approvefinalize/approvefinalize.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'all-pages', component: AllPagesComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'approvefinalize', component: ApprovefinalizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
