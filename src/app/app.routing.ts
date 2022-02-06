import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePageModule ),
    pathMatch:'full'
  },
  {
    path:'ropa',
    loadChildren: () => import('./pages/clothing/clothing.module').then( m => m.ClothingModule )
  },
  {
    path:'accesorios',
    loadChildren: () => import('./pages/accessories/accessories.module').then( m => m.AccessoriesModule )
  },

  {
    path:'hogar',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule )
  },

  {
    path:'404',
    loadChildren: () => import('./pages/no-found/no-found.module').then( m => m.NoFoundModule )
  },

  {
    path:'**',
    redirectTo:'/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
