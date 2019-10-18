import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {PaginatorModule} from 'primeng/paginator';



@NgModule({
    declarations: [
    ],
    imports: [
        FormsModule,
        CommonModule,
        PaginatorModule
    ],
    exports: [
        CommonModule,
        PaginatorModule
    ],
    providers: []
})

export class SharedModule { }
