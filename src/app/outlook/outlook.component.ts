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

  btnVal = "Show Search";
  calvalue = "Show Calendar";
  showfilter = "Show Filter";
  icon1 = "eye";
  icon2 = "eye";
  icon3 = "eye";
 
  public today: Date = new Date();
  public currentDate: String = (this.today.getDate() + '/' + (this.today.getMonth() + 1) + '/' + this.today.getFullYear());
  public minDate: Date = new Date("05/05/1177");
  public maxDate: Date = new Date("05/05/2077");
  public value: Date = new Date();



  public outlook?: Outlook[];
  public outlookdata?: Outlook[];
  public count?: Outlook[];
  public source?: Outlook[];
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

    http.get<Outlook[]>('/api/Count').subscribe(result => {
      this.count = result;
      console.log(JSON.stringify(this.count));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Outlook[]>('/api/Source').subscribe(result => {
      this.source = result;
      console.log(JSON.stringify(this.source));
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
    this.ShowMeCalender = !this.ShowMeCalender;
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
  count: number;
  id: string;
}
