import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ModalContentComponent } from './fetch-data/modal-content.component';
import { FetchDataModule } from './fetch-data/fetch-data.module';
import { CoreModule } from './core/core.module';
import { HomeResolver } from './home/home-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CoreModule,
    FetchDataModule,
    
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full',
        resolve: { data: HomeResolver}
      }
      ,
      { path: 'counter', component: CounterComponent },

    ])
  ],
  providers: [ HomeResolver ],
  bootstrap: [AppComponent, ModalContentComponent]
})
export class AppModule { }
