import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { RoutingCompComponent } from './routing-comp/routing-comp.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [{ path: "two", component: CompTwoComponent }, { path: "routing", component: RoutingCompComponent }, { path: "default", component: DefaultComponent }, { path: "", redirectTo: "/default", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
