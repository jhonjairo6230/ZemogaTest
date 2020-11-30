import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-create-profile',
  templateUrl: './update-create-profile.component.html',
  styleUrls: ['./update-create-profile.component.scss']
})
export class UpdateCreateProfileComponent implements OnInit {
  formulario: FormGroup;
  constructor(    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }


   fijarFormulario(data: any) {
    this.formulario = new FormGroup({
      description: new FormControl(data.description, [Validators.required]),
      image_url: new FormControl(data.image_url, [Validators.required]),
      twitter_user_name: new FormControl(data.twitter_user_name, [Validators.required]),
      title: new FormControl(data.title, [Validators.required]),
      id: new FormControl(null, [Validators.required])
    });
  }

  validateForm(){

  }

  edit(){}

  cancel(){
    this.router.navigate(['/main']);
  }

}
