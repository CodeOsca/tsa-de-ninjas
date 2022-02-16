import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarnLegalComponent } from './warn-legal/warn-legal.component';
import { PoliticsPrivacyComponent } from './politics-privacy/politics-privacy.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path: 'aviso-legal', component: WarnLegalComponent },
            { path: 'politica-privacidad', component: PoliticsPrivacyComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfoRoutingModule {}
