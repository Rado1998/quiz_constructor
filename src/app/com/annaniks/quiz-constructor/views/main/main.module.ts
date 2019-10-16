import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent, SlideNavComponent } from '../../components';
import { MenuService } from '../../services/menu.service';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SlideNavComponent

  ],
  imports: [
    SharedModule,
    MainRoutingModule,
  ],
  providers:[MenuService]
})
export class MainModule { }
