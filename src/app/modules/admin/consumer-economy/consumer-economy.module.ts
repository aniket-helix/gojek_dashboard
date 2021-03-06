import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerEconomyRoutingModule } from './consumer-economy-routing.module';
import { ComingSoonComponent } from './coming-soon/coming-soon-sales.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataFiltersDialogComponent } from './data-filters-dialog/data-filters-dialog.component';
import { FormsModule } from '@angular/forms';
import { GraphComponentComponent } from './graph-component/graph-component.component';
import { VariableNotesDialogComponent } from './variable-notes-dialog/variable-notes-dialog.component';

import { CookieService } from 'ngx-cookie-service';
import { FirstTimePopupComponent } from './first-time-popup/first-time-popup.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DataFilterOptionsDialogComponent } from './data-filter-options-dialog/data-filter-options-dialog.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    ComingSoonComponent,
    DataFiltersDialogComponent,
    GraphComponentComponent,
    VariableNotesDialogComponent,
    FirstTimePopupComponent,
    DataFilterOptionsDialogComponent
  ],
  imports: [
    CommonModule,
    ConsumerEconomyRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    PlotlyModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  providers: [CookieService, {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class ConsumerEconomyModule { }
