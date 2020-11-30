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

  constructor(private mainService:MainService,private router: Router, private route: ActivatedRoute,) { 
    
  }

  async ngOnInit() {
    this.profileInfo =   await this.mainService.getProfileInfo("ffe1a040-3219-11eb-bbe0-c5fc6762aab8");
  }

  goToEdit(){
    this.router.navigate(['/update-create-profile']);
  }

  async ngAfterViewInit() {

  }

}
