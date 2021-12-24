import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ProductService} from './product.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { SecurityComponent } from './security/security.component';
import { HowtocallComponent } from './howtocall/howtocall.component';
import { ProviderComponent } from './provider/provider.component';
import { CoverageComponent } from './coverage/coverage.component';

export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http,'../assets/translate/', '.json');
}

const routes: Routes= [
  {path:'',component: HomeComponent, pathMatch:'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'security-covid', component: SecurityComponent},
  {path: 'howToCall', component: HowtocallComponent},
  {path: 'provider', component: ProviderComponent},
  {path: 'coverage-area', component: CoverageComponent},
  {path: '**', component: ErrorComponent, pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    SecurityComponent,
    HowtocallComponent,
    ProviderComponent,
    CoverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'EN',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
