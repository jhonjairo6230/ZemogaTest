import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-create-profile',
  templateUrl: './update-create-profile.component.html',
  styleUrls: ['./update-create-profile.component.scss']
})
export class UpdateCreateProfileComponent implements OnInit {
  form: FormGroup;
  element:any;
  constructor(    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.element = JSON.parse(sessionStorage.getItem("profile"));
      this.setForm(this.element);
     }

  ngOnInit(): void {
    this.setForm(this.element);
  }


   setForm(data: any) {
    this.form = new FormGroup({
      description: new FormControl(data.description, [Validators.required]),
      image_url: new FormControl(data.image_url, [Validators.required]),
      twitter_user_name: new FormControl(data.twitter_user_name, [Validators.required]),
      title: new FormControl(data.title, [Validators.required]),
      id: new FormControl(data.id, [Validators.required])
    });
  }

  validateForm(){
    return !this.form.valid;
  }

  edit(){}

  cancel(){
    sessionStorage.setItem("profile","");
    this.router.navigate(['/main']);
  }

}
