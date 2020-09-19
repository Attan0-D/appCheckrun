import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'created-user',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'created-user',
    loadChildren: () => import('./created-user/created-user.module').then( m => m.CreatedUserPageModule)
  },   {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register-list',
    loadChildren: () => import('./register-list/register-list.module').then( m => m.RegisterListPageModule)
  },
  {
    path: 'show-list',
    loadChildren: () => import('./show-list/show-list.module').then( m => m.ShowListPageModule)
  },
  {
    path: 'my-performance',
    loadChildren: () => import('./my-performance/my-performance.module').then( m => m.MyPerformancePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
