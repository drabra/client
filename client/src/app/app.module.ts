import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OceneService } from '../app/shared/ocene.service'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UcenikoveOceneListComponent } from './ucenikove-ocene-list/ucenikove-ocene-list.component';
import { PredmetComponent } from './predmet/predmet.component';
import { RouterModule, Routes } from '@angular/router';
import { PredmetService } from './shared/predmet.service';
import { PredmetListComponent } from './predmet-list/predmet-list.component';

const appRoutes: Routes = [
 { path: '', redirectTo: '/ocene', pathMatch: 'full' },
  {
    path: 'ocene',
    component: UcenikoveOceneListComponent
  },
  {
    path: 'dodaj-predmet',
    component: PredmetComponent
  },
  {
    path: 'predmeti',
    component: PredmetListComponent
  },
  {
    path: 'predmet-edit/:id',
    component: PredmetComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UcenikoveOceneListComponent,
    PredmetComponent,
    PredmetListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OceneService, PredmetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
