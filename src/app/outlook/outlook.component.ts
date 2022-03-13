import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-outlook',
  templateUrl: './outlook.component.html',
  styleUrls: ['./outlook.component.css']
})
export class OutlookComponent implements OnInit {
  showMesearch: boolean = false;
  showFilter: boolean = false;
  ShowMeCalender: boolean = false;

  public today: Date = new Date();
  public currentDate: String = (this.today.getDate() + '/' + (this.today.getMonth() + 1) + '/' + this.today.getFullYear());


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


  public outlook?: Outlook[];
  public outlookdata?: Outlook[];

  constructor(private ngxService: NgxUiLoaderService, private router: Router, http: HttpClient) {
    http.get<Outlook[]>('/api/Outlook').subscribe(result => {
      this.outlook = result;
      console.log(JSON.stringify(this.outlook));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Outlook[]>('/api/Data').subscribe(result => {
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
  ResetAll = () => {
    this.router.navigateByUrl('/datapage');
  }
  calender() {
    this.ShowMeCalender = !this.ShowMeCalender
  }

  search() {
    this.showMesearch = !this.showMesearch
  }
  filter() {
    this.showFilter = !this.showFilter
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
    const title = prompt('Please add your task');
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

interface Outlook {
  date: string;
  dateTask2: string;
  name: string;
  due: number;
  due4: number;
  title: string;
  title2: string;
  imageUrl: string;
  resolved: boolean;   
}
