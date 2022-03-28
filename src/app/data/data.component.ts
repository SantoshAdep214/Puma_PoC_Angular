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
  showMecalendar: boolean = false;
  showMesearch: boolean = false;
  showFilter: boolean = false;

  public minDate: Date = new Date("05/05/1177");
  public maxDate: Date = new Date("05/05/2077");
  public value: Date = new Date();


  btnVal = "Show Search";
  calvalue = "Show Calendar";
  showfilter = "Show Filter";
  icon1 = "eye";
  icon2 = "eye";
  icon3 = "eye";

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

  public count?: Data[];
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

    http.get<Data[]>('/api/Count').subscribe(result => {
      this.count = result;
      console.log(JSON.stringify(this.count));
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
    this.showMecalendar = !this.showMecalendar;
    if (this.calvalue == "Hide Calender" && this.icon1 == "eye-slash") {
      this.calvalue = "Show Calendar";
      this.icon1 = "eye";
    } else {
      this.calvalue = "Hide Calender";
      this.icon1 = "eye-slash";
    }
  }

  search() {
    this.showMesearch = !this.showMesearch

    if (this.btnVal == "Hide Search" && this.icon2 == "eye-slash") {
      this.btnVal = "Show Search";
      this.icon2 = "eye";
    }
    else {
      this.btnVal = "Hide Search";
      this.icon2 = "eye-slash";
    }
  }
  filter() {
    this.showFilter = !this.showFilter
    if (this.showfilter == "Hide Filter" && this.icon3 == "eye-slash") {
      this.showfilter = "Show Filter";
      this.icon3 = "eye";
    }
    else {
      this.showfilter = "Hide Filter";
      this.icon3 = "eye-slash";
    }
  }


  pumahome() {
    this.router.navigateByUrl('/homepage');
  }

}

interface Data {
  id: string;
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
  count: number;
}


