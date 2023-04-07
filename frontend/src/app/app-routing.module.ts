import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
