import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Injectable()
export class QuestionService{
    constructor(private apiService: ApiService){}
    public gets(url: string){
       return this.apiService.get(url)
    }
}