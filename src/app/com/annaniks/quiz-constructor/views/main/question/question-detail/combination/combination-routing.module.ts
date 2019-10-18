import { NgModule } from '@angular/core';
import { CombinationComponent } from './combination.component';
import { Routes, RouterModule } from '@angular/router';

const combinationRoutes: Routes = [
    { path: '', component: CombinationComponent }
]

@NgModule({
    imports: [RouterModule.forChild(combinationRoutes)],
    exports: [RouterModule]
})
export class CombinationRoutingModule { }