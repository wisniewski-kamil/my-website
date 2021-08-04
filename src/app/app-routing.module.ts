import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PolishComponent} from "./components/polish/polish.component";
import {EnglishComponent} from "./components/english/english.component";

const routes: Routes = [
  {
    path: "polish",
    component: PolishComponent
  },
  {
    path: "english",
    component: EnglishComponent
  },
  {
    path: "**",
    redirectTo: "polish",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
