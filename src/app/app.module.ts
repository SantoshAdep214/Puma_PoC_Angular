import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DataComponent } from './data/data.component';
import { WorkdayComponent } from './workday/workday.component';
import { OpentextComponent } from './opentext/opentext.component';
import { SAPConcurComponent } from './sapconcur/sapconcur.component';
import { AdobeSignComponent } from './adobe-sign/adobe-sign.component';
import { OutlookComponent } from './outlook/outlook.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import {
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";


/*import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-ng-schedule'; */

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  /*"bgsColor": "red",
  "bgsOpacity": 0.8,
  "bgsPosition": "bottom-right",
  "bgsSize": 150,*/
  "bgsType": "ball-scale-multiple",
  "blur": 30,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#b5aaaa",
  "fgsPosition": "center-center",
  "fgsSize": 300,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 150,
  "logoUrl": "https://www.thenfapost.com/wp-content/uploads/2020/11/Puma.jpg",
  "overlayBorderRadius": "0",
  "overlayColor": "black",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "Please Wait",
  "textColor": "white",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300


};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DataComponent,
    WorkdayComponent,
    OpentextComponent,
    SAPConcurComponent,
    AdobeSignComponent,
    OutlookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule,
    CalendarModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    NgxUiLoaderHttpModule.forRoot({
     showForeground: false,
    }),
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
