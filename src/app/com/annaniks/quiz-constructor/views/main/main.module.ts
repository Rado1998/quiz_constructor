import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent, SlideNavComponent } from '../../components';
import { MenuService } from '../../services/menu.service';
import { SlideNavPositionDirective } from '../../directives';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SlideNavComponent,
    SlideNavPositionDirective
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
  ],
  providers: [MenuService]
})
export class MainModule { }
