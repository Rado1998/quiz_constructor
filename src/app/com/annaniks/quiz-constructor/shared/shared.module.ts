import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from '../components';
import { PaginatorModule } from 'primeng/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    declarations: [
        TreeSelectComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PaginatorModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    exports: [
        CommonModule,
        TreeSelectComponent,
        ReactiveFormsModule,
        PaginatorModule,
        MatRadioModule,
        MatCheckboxModule
    ],
})

export class SharedModule { }
