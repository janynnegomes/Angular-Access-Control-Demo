import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role} from '@shared/models/role'
import { AdminGuard } from '@app/guards/admin.guard';

const routes: Routes = [
  { path: 'home',
    data: {roles:[Role.Admin, Role.SearchUser]},
    //canActivate:[AdminGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
