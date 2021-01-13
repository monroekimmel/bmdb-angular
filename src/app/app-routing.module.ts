import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

const routes: Routes = [
{path:, redirectTo: '/hoome', pathMatch: 'full'},
{path: '/movie-list', component: MovieListComponent},
{path: '/movie-create', component: MovieCreateComponent},
{path: '/actor-list', component: ActorListComponent},
{path: '**', component: noComponentDefinedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }