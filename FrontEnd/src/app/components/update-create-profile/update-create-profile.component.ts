import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-update-create-profile',
  templateUrl: './update-create-profile.component.html',
  styleUrls: ['./update-create-profile.component.scss']
})
export class UpdateCreateProfileComponent implements OnInit {
  form: FormGroup;
  element: any;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainService: MainService) {
    this.element = JSON.parse(sessionStorage.getItem("profile"));
    this.setForm(this.element);
  }

  ngOnInit(): void {
    //this.setForm(this.element);
  }


  setForm(data: any) {
    this.form = new FormGroup({
      description: new FormControl(data.description, [Validators.required]),
      image_url: new FormControl(data.image_url, [Validators.required]),
      twitter_user_name: new FormControl(data.twitter_user_name, [Validators.required]),
      title: new FormControl(data.title, [Validators.required])
    });
    // console.log(this.form.controls)
  }

  validateForm() {
    return !this.form.valid;
  }

  async edit() {
    let request = {
      description: this.form.controls.description.value,
      image_url: this.form.controls.image_url.value,
      twitter_user_name: this.form.controls.twitter_user_name.value,
      title: this.form.controls.title.value,
      id: this.element.id
    }
    try {
      await this.mainService.updateProfile(request);
      sessionStorage.setItem("profile", "");
      this.router.navigate(['/main']);
    } catch (error) {
      console.error(error);
    }
  }

  cancel() {
    sessionStorage.setItem("profile", "");
    this.router.navigate(['/main']);
  }

}
