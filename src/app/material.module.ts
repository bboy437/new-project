
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
 import { CdkTableModule } from '@angular/cdk/table';
 import { NgModule } from '@angular/core';
 import { DragDropModule } from '@angular/cdk/drag-drop';
 import { MatBadgeModule } from '@angular/material/badge';
 import { MatAutocompleteModule } from '@angular/material/autocomplete';
 import { MatButtonModule } from '@angular/material/button';
 import { MatButtonToggleModule } from '@angular/material/button-toggle';
 import { MatCardModule } from '@angular/material/card';
 import { MatCheckboxModule } from '@angular/material/checkbox';
 import { MatChipsModule } from '@angular/material/chips';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatExpansionModule } from '@angular/material/expansion';
 import { MatGridListModule } from '@angular/material/grid-list';
 import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
 import { MatListModule } from '@angular/material/list';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatPaginatorModule } from '@angular/material/paginator';
 import { MatProgressBarModule } from '@angular/material/progress-bar';
 import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 import { MatRadioModule } from '@angular/material/radio';
 import { MatSelectModule } from '@angular/material/select';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 import { MatSliderModule } from '@angular/material/slider';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatSortModule } from '@angular/material/sort';
 import { MatStepperModule } from '@angular/material/stepper';
 import { MatTableModule } from '@angular/material/table';
 import { MatTabsModule } from '@angular/material/tabs';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatTooltipModule } from '@angular/material/tooltip';
 import { MatTreeModule } from '@angular/material/tree';

 @NgModule({
   // imports: [MatTableExporterModule],
   exports: [
     CdkTableModule,
     DragDropModule,
     MatAutocompleteModule,
     MatBadgeModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatTableModule,
     MatDialogModule,
     MatExpansionModule,
     MatGridListModule,
     MatIconModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,

     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatSelectModule,
     MatSidenavModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
     MatTreeModule,
     MatStepperModule,

   ]
 })

 export class MaterialModule { }
