import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { GalleryComponent } from './components/views/gallery/gallery.component';
import { AboutComponent } from './components/views/about/about.component';
import { MissionComponent } from './components/views/mission/mission.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'missions', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission/:id', component: MissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
