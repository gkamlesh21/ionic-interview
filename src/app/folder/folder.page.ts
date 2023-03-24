import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../service/data.service';
import { DataModel } from '../service/dataModel';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: any;
  public technologies: Array<{
    id: string;
    name: string;
    description: string;
  }> | undefined;
  searchedKeyword: any = { name: '' };

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService, private platform: Platform, private location: Location) {}

  ngOnInit() {
    // console.log(this.location);
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");   
    
    this.dataService.getFolderDataPromise()
        
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        // console.log(this.router.getCurrentNavigation().extras.state.singleData);
        this.technologies = this.router.getCurrentNavigation()?.extras?.state?.["singleData"]?.question;
      } else {
         this.dataService.getFolderData()
          .subscribe(
            (data: DataModel[] ) => {
              // console.log(data, this.folder, this.folder.toLowerCase() );

              let _this = this;
              const temp = data?.find(item => this.folder.toLowerCase() == item.title.toLowerCase());
              
              // console.log(temp);
              this.technologies = (temp).question;
            },
            (err: any) => {
              console.log(err);
            }
          );
      }
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.searchedKeyword.name = "";
      // this.location.back();
    });
  }
}
