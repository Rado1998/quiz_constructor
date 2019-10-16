import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';


@NgModule({
    declarations: [
    ],
    imports: [
        FormsModule,
        CommonModule,
    ],
    exports: [
        CommonModule
    ],
    providers: [ApiService]
})

export class SharedModule { }
