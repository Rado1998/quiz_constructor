import { NgModule } from '@angular/core';
import { CombinationComponent } from './combination.component';
import { CombinationRoutingModule } from './combination-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
    declarations: [
        CombinationComponent
    ],
    imports: [
        CombinationRoutingModule,
        SharedModule
    ]
})
export class CombinationModule { }