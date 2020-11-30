import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {
  public profiles;
  isLoading = true; 
  constructor(private route: ActivatedRoute, private router: Router, private mainService:MainService) { }

  async ngOnInit() {
    this.profiles = await this.mainService.getAllProfiles();
    this.profiles = this.profiles.profiles;
    this.isLoading = false;
  }

  goToDetail(profile){
    sessionStorage.setItem("profile_selected",profile.id)
    this.router.navigate(['/main']);
  }

}
