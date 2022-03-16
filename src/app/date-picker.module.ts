import { NgModule } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
   parse: {
      // dateInput: 'LL',
      dateInput: 'DD/MM/YYYY',
   },
   display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMM YYYY',
   },
};

@NgModule({
   declarations: [],
   // imports: [],
   exports: [MatDatepickerModule, MatNativeDateModule],
   providers: [
      // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
      // application's root module. We provide it at the component level here, due to limitations of
      // our example generation script.


      { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
      // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
      // CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
      { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
   ],
})

export class DatePickerModule {

}