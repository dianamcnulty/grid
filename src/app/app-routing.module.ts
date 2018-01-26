import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GridBoxComponent} from './grid-box/grid-box.component'
import {PersonDetailsComponent} from './person-details/person-details.component'
import {UpdateComponent} from './update/update.component'



const routes: Routes = [
    {
      path: '',
      component: GridBoxComponent
    },
    {
      path: 'person/:id',
      component: PersonDetailsComponent
    },
    {
      path: 'update',
      component: UpdateComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
