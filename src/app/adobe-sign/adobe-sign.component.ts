import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adobe-sign',
  templateUrl: './adobe-sign.component.html',
  styleUrls: ['./adobe-sign.component.css']
})
export class AdobeSignComponent implements OnInit {
  showMesearch: boolean = false;
  showFilter: boolean = false;
  ShowMeCalender: boolean = false;

  btnVal = "Show Search";
  calvalue = "Show Calendar";
  showfilter = "Show Filter";
  icon1 = "eye";
  icon2 = "eye";
  icon3 = "eye";

  public minDate: Date = new Date("05/05/1177");
  public maxDate: Date = new Date("05/05/2077");
  public value: Date = new Date();


  public today: Date = new Date();
  public currentDate: String = (this.today.getDate() + '/' + (this.today.getMonth() + 1) + '/' + this.today.getFullYear());
  public currentday: number = (this.today.getDate());
  public currentmonth:number = (this.today.getMonth()+1);
  public adobe?: Adobe[];

  public adobedata?: Adobe[];

  public count?: Adobe[];

  constructor(private ngxService: NgxUiLoaderService, private router: Router, http: HttpClient) {
  

    http.get<Adobe[]>('/api/Adobe').subscribe(result => {
      this.adobe = result;
      console.log(JSON.stringify(this.adobe));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Adobe[]>('/api/AdobeCard2').subscribe(result => {
      this.adobedata = result;
      console.log(JSON.stringify(this.adobedata));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Adobe[]>('/api/Count').subscribe(result => {
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

interface Adobe {
  id: string;
  source: string;
  title: string;
  titleAdobe: string;
  dueAdobe: number;
  dateAdobe: string;
  due: number;
  resolved: boolean;
  imageUrl: string;
  name: string;
  date: string;
  count: number;
}
