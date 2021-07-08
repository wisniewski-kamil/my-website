import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PolishComponent} from "./components/polish/polish.component";

const routes: Routes = [
  {
    path: "**",
    redirectTo: "polish",
    pathMatch: "full"
  },
  {
    path: "polish",
    component: PolishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
