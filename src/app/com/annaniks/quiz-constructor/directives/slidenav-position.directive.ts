import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[slidenav-position]'
})
export class SlideNavPositionDirective implements OnInit {

    constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) { }

    ngOnInit() {
        this._checkScrollPosition();
    }

    private _checkScrollPosition(): void {
        document.addEventListener('scroll', () => {
            let position: number = 0;
            var htmlElement: HTMLHtmlElement = document.querySelector("html");
            const classList: string[] = Array.from(htmlElement.classList);
            const index: number = classList.indexOf("cdk-global-scrollblock")
            if (window.scrollY < 70 && index == -1) {
                position = 70 - window.scrollY;
            }
            else {
                position = 0;
            }
            this._renderer2.setStyle(this._elementRef.nativeElement, "top", position + 'px');
        })
    }

}