import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheetsComponent } from './sheets/sheets.component';
import { LampsComponent } from './lamps/lamps.component';
import { MugsComponent } from './mugs/mugs.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path:'sabanas', component:SheetsComponent },
            { path:'lamparas', component:LampsComponent },
            { path:'tazas', component:MugsComponent },
            { path:'**', redirectTo:'/404' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
