import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-question',
    loadChildren: () => import('./create-question/create-question.module').then( m => m.CreateQuestionPageModule)
  },
  {
    path: 'beginning',
    loadChildren: () => import('./beginning/beginning.module').then( m => m.BeginningPageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'forgotten-password',
    loadChildren: () => import('./forgotten-password/forgotten-password.module').then( m => m.ForgottenPasswordPageModule)
  },
  {
    path: 'confirm-code',
    loadChildren: () => import('./confirm-code/confirm-code.module').then( m => m.ConfirmCodePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'check/:id',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'terms-and-conditions2',
    loadChildren: () => import('./terms-and-conditions2/terms-and-conditions2.module').then( m => m.TermsAndConditions2PageModule)
  },
  {
    path: 'ajuda-pratica',
    loadChildren: () => import('./ajuda-pratica/ajuda-pratica.module').then( m => m.AjudaPraticaPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
