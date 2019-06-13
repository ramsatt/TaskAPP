import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HttpClientModule} from '@angular/common/http';
import {MovieService} from '../movie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [MovieService]
})
export class HomePageModule {}
