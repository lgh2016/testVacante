import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'sample', component: SampleComponent },

            { path: '', redirectTo: '/login', pathMatch: 'full' },
        ],
      },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
