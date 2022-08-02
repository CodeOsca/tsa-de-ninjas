import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AwordsComponent } from './awords/awords.component';
import { MasksComponent } from './masks/masks.component';
import { MobileCoversComponent } from './mobile-covers/mobile-covers.component';
import { BagsComponent } from './bags/bags.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path: 'espadas', component: AwordsComponent, pathMatch:'full' },
            { path: 'mascaras', component: MasksComponent },
            { path: 'fundas-moviles', component: MobileCoversComponent },
            { path: 'bolsos', component: BagsComponent },
            { path:'**', redirectTo:'/404' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessoriesRoutingModule {}
