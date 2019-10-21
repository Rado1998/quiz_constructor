import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _loadingState: Observable<boolean>;

    constructor() {
        this._loadingState = this._loading.asObservable();
    }

    public setLoadingState(isLoading: boolean): void {
        this._loading.next(isLoading);
    }

    public getLoadingState(): Observable<boolean> {
        return this._loadingState;
    }
}