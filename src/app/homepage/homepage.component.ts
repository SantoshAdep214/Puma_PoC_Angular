import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  public display?: Data[];
  public workday?: Data[];
  public adobe?: Data[];
  public opentext?: Data[];
  public sapconcur?: Data[];
  public outlook?: Data[];
  public count?: Data[];
  public adobe2?: Data[];
  public outlook2?: Data[];
  public source?: Data[];
 
    ShowLoadingIndicator=true;

 /* constructor(private router: Router, http: HttpClient) {
   *//* http.get<Data[]>('/api/Data').subscribe(result => {
      this.display = result;
      console.log(JSON.stringify(this.display));
    }, error => console.error(error));*//*


   
  }*/

  constructor(private ngxService: NgxUiLoaderService, private router: Router, http: HttpClient) {
    http.get<Data[]>('/api/Data').subscribe(result => {
      this.display = result;
      console.log(JSON.stringify(this.display));
    }, error => console.error(error));


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

    http.get<Data[]>('/api/AdobeCard2').subscribe(result => {
      this.adobe2 = result;
      console.log(JSON.stringify(this.adobe2));
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

    http.get<Data[]>('/api/Count').subscribe(result => {
      this.count = result;
      console.log(JSON.stringify(this.count));
      console.log(Object.values(result));
    }, error => console.error(error));

   /* http.get<Data[]>('/api/').subscribe(result => {
      this.count = result;
      console.log(JSON.stringify(this.count));
      console.log(Object.values(result));
    }, error => console.error(error));
*/
    http.get<Data[]>('/api/Data').subscribe(result => {
      this.outlook2 = result;
      console.log(JSON.stringify(this.outlook2));
      console.log(Object.values(result));
    }, error => console.error(error));

    http.get<Data[]>('/api/Source').subscribe(result => {
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


  btnClick = () => {
    this.router.navigateByUrl('/datapage');
  }

 Workday = () => {
    this.router.navigateByUrl('/workday');
  }

  Opentext = () => {
    this.router.navigateByUrl('/opentext');
  }
  SAPConcur = () => {
    this.router.navigateByUrl('/sapconcur');
  }

  Adobesign = () => {
    this.router.navigateByUrl('/adobesign');
  }

  Outlook = () => {
    this.router.navigateByUrl('/outlook');
  }

  pumahome() {
    this.router.navigateByUrl('/homepage');}

}


interface Data {
  id: string ;
  source: string;
  title: string;
  due: number;
  resolved: boolean;
  imageUrl: string;
  name: string;
  date: string;
 
  workdaycount: number;
  adobecount: number;
  sapcount: number;
  opentextcount: number;
  todocount: number;
  outlookcount: number;
  count: number;
}
