import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TshirtsComponent } from './tshirts/tshirts.component';
import { SleepwearComponent } from './sleepwear/sleepwear.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CostumesComponent } from './costumes/costumes.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path:'camisetas', component: TshirtsComponent, pathMatch:'full' },
            { path:'pijamas', component: SleepwearComponent },
            { path:'sudaderas', component: SweatshirtsComponent },
            { path:'zapatos', component: ShoesComponent },
            { path:'disfraces', component: CostumesComponent },
            { path:'**', redirectTo:'/404' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClothingRoutingModule {}
