import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public isLoading: boolean = false;

    constructor(private _loadingService: LoadingService) { }

    ngOnInit() {
        this._handleLoadingState();
    }

    private _handleLoadingState(): void {
        this._loadingService.getLoadingState()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((isLoading: boolean) => {
                this.isLoading = isLoading;
            })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }



}