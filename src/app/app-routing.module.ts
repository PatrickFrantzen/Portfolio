import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {path: '', component: StartpageComponent},
  {path: 'imprint', component:ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
