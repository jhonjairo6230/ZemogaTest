import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  public profileInfo:any;
  public profileSelected;
  public isLoading = true; 

  constructor(private mainService:MainService,private router: Router, private route: ActivatedRoute,) { 
    this.profileSelected = sessionStorage.getItem("profile_selected")
  }

  async ngOnInit() {
    this.profileInfo =   await this.mainService.getProfileInfo(this.profileSelected.toString());
    this.isLoading = false;
  }

  goToEdit(){
    sessionStorage.setItem("profile",JSON.stringify(this.profileInfo));
    this.router.navigate(['/update-create-profile']);
  }

  async ngAfterViewInit() {

  }

}
