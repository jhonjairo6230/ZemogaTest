import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { MainComponent } from './components/main/main.component';
import { UpdateCreateProfileComponent } from './components/update-create-profile/update-create-profile.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/list-profiles',
  pathMatch: 'full'
}, {
  path: 'main',
  component: MainComponent
}, {
  path: 'update-create-profile',
  component: UpdateCreateProfileComponent

}, {
  path: 'list-profiles',
  component: ListProfilesComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
