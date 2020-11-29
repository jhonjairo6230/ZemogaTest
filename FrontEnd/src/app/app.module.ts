import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainComponent } from './components/main/main.component';
import { UpdateCreateProfileComponent } from './components/update-create-profile/update-create-profile.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpdateCreateProfileComponent,
    ListProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
