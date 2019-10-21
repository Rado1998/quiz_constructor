import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from '../components';
import { PaginatorModule } from 'primeng/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AlertModalComponent } from './components';


@NgModule({
    declarations: [
        TreeSelectComponent,
        AlertModalComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PaginatorModule,
        MatRadioModule,
        MatCheckboxModule,
        ProgressSpinnerModule,
        MatDialogModule
    ],
    entryComponents: [
        AlertModalComponent
    ],
    exports: [
        CommonModule,
        TreeSelectComponent,
        ReactiveFormsModule,
        PaginatorModule,
        MatRadioModule,
        MatCheckboxModule,
        ProgressSpinnerModule,
        AlertModalComponent,
        MatDialogModule
    ],
})

export class SharedModule { }
