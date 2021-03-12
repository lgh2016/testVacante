import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


import { RouterModule } from '@angular/router';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    // NgxMaskModule.forRoot({
    //   validation: true,
    // }),
    
    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    // MatMomentDateModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatChipsModule,
    RouterModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    PAGES_ROUTES
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,

    // NgxMaskModule,
    
    // MATERIAL
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    // MatMomentDateModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatStepperModule,    
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    // IvyCarouselModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatChipsModule,
    HttpClientModule,
    // ChartsModule
    RouterModule,
    ReactiveFormsModule,
    MatGridListModule,
    


  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
