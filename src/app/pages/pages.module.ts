import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidebarComponent
  ],
  entryComponents: [

  ],
  exports: [
    SharedModule,
  ],
  imports: [PAGES_ROUTES, SharedModule],
})
export class PagesModule {}
