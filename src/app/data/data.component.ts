import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  showMecalnder: boolean = false;
  showMesearch: boolean = false;
  showFilter: boolean = false;


  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)

  };
  currentEvents: EventApi[] = [];
  
 /* public minDate: Date = new Date("01/01/1900");
  public maxDate: Date = new Date("01/01/2050");
  public value: Date = new Date("03/04/2022");*/
  public today: Date = new Date();
  public currentDate: String = (this.today.getDate() + '/' + (this.today.getMonth()+1) + '/' + this.today.getFullYear());
  public day: number = this.today.getDate();
  public month:number = this.today.getMonth()+1;
  public year: number = this.today.getFullYear();

 

  public workday?: Data[];

  public adobe?: Data[];

  public outlook?: Data[];

  public sapconcur?: Data[];

  public opentext?: Data[];

  public outlookdata?: Data[];

  public adobedata?: Data[];

  constructor(private ngxService: NgxUiLoaderService, private router: Router, http: HttpClient) {

     http.get<Data[]>('/api/Workday').subscribe(result => {
       this.workday = result;
       console.log(JSON.stringify(this.workday));
      console.log(Object.values(result));
     }, error => console.error(error));

    http.get<Data[]>('/api/Adobe').subscribe(result => {
      this.adobe = result;
      console.log(JSON.stringify(this.adobe));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Data[]>('/api/Outlook').subscribe(result => {
      this.outlook = result;
      console.log(JSON.stringify(this.outlook));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Data[]>('/api/SAPConcur').subscribe(result => {
      this.sapconcur = result;
      console.log(JSON.stringify(this.sapconcur));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Data[]>('/api/Opentext').subscribe(result => {
      this.opentext = result;
      console.log(JSON.stringify(this.opentext));
      console.log(Object.values(result));
    }, error => console.error(error));


    http.get<Data[]>('/api/AdobeCard2').subscribe(result => {
      this.adobedata = result;
      console.log(JSON.stringify(this.adobedata));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Data[]>('/api/Data').subscribe(result => {
      this.outlookdata = result;
      console.log(JSON.stringify(this.outlookdata));
      console.log(Object.values(result));
    }, error => console.error(error));

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.ngxService.start();
    }, 0);
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 0);

    // OR
    this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    setTimeout(() => {
      this.ngxService.startLoader("loader-01");
    }, 0); 
    
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); 
    }, 0);
  }
  
  calender() {
    this.showMecalnder = !this.showMecalnder
  }

  search() {
    this.showMesearch = !this.showMesearch
  }
  filter() {
       this.showFilter= !this.showFilter
  }
  pumahome() {
    this.router.navigateByUrl('/homepage');
  }




  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please add your task...');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the task '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}

interface Data {
  id: number;
  source: string;
  title: string;
  title2: string;

  titleAdobe: string;
  dueAdobe: number;
  dateAdobe: string;

  due: number;
  due4: number;
  resolved: boolean;
  imageUrl: string;
  name: string;
  date: string;
  dateTask2: string;
}


