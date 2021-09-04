import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MockyService } from '../mocky.service';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from '../chart/chart.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [

    CommonModule, 
    MockyService,
    ChartComponent,
    DefaultComponent,

    ChartsModule, 
    RouterModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, 
    MatTableModule,
    BrowserAnimationsModule, 
  ],
  providers:[MockyService]
})
export class DefaultModule { }
