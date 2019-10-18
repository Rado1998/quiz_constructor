import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from '../components';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
    declarations: [
        TreeSelectComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PaginatorModule
    ],
    exports: [
        CommonModule,
        TreeSelectComponent,
        ReactiveFormsModule,
        PaginatorModule
    ],
})

export class SharedModule { }
