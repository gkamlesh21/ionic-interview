import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { DataService } from "./service/data.service";
import { Router, NavigationExtras } from "@angular/router";
import { DataModel } from "./service/dataModel";
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages: any = [
    {
      title: "JavaScript",
      url: "/folder/JavaScript",
      icon: "logo-javascript"
    },
    {
      title: "JavaScript Coding",
      url: "/folder/JavaScript Coding",
      icon: "logo-javascript"
    },
    {
      title: "Angular",
      url: "/folder/Angular",
      icon: "logo-angular"
    },
    {
      title: "React",
      url: "/folder/React",
      icon: "logo-react",
    },
    {
      title: "React Native",
      url: "/folder/React Native",
      icon: "logo-react",
    },
    {
      title: "HTML",
      url: "/folder/HTML",
      icon: "logo-html5",
    },
    {
      title: "CSS",
      url: "/folder/CSS",
      icon: "logo-css3",
    },
    {
      title: "SCSS",
      url: "/folder/SCSS",
      icon: "logo-css3",
    },
    {
      title: "JQuery",
      url: "/folder/JQuery",
      icon: "logo-javascript",
    },
    {
      title: "Micro Frontend",
      url: "/folder/Micro Frontend",
      icon: "apps-outline",
    },
    {
      title: "Agile & Scrum",
      url: "/folder/Agile & Scrum",
      icon: "analytics-outline",
    },
    {
      title: "Software Engineering",
      url: "/folder/Software Engineering",
      icon: "laptop-outline",
    },
    {
      title: "HR",
      url: "/folder/HR",
      icon: "people-circle-outline",
    }
  ];
  
  constructor(
    private platform: Platform,
    private dataService: DataService,
    private router: Router,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      // this.statusBar.backgroundColorByHexString('#ffffff');
      this.dataService.getFolderData().subscribe(
        (data: DataModel[]) => {
          // console.log(data);
          this.appPages = data;
        },
        (err: any) => {
          console.log(err);
        }
      );      
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page:any) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  goToPage(item:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        singleData: item,
      },
    };
    this.router.navigateByUrl(item.url, navigationExtras);
  }
}
