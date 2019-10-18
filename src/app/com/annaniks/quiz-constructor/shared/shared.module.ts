import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from '../components';


@NgModule({
    declarations: [
        TreeSelectComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
    ],
    exports: [
        CommonModule,
        TreeSelectComponent,
        ReactiveFormsModule
    ],
})

export class SharedModule { }
