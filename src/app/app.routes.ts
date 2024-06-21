import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: 'characters', component:  CharactersPageComponent},
    { path: 'characters/:id', component: CharactersDetailsPageComponent },
    { path: '**', redirectTo: '/characters' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
  