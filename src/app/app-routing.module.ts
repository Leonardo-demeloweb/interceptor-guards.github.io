import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { PageUnauthorizedComponent } from "./components/page-unauthorized/page-unauthorized.component";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "user1", pathMatch: "full" },
  { path: "page-unauthorized", component: PageUnauthorizedComponent },
  { path: "user1", component: UserPageComponent, canActivate: [AuthGuard] },
  {
    path: "admin1",
    component: AdminPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
