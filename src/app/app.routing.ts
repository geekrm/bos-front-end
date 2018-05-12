import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PanelComponent} from './components/panel/panel.component';


const appRoutes: Routes = [
  { path: 'panel', component: PanelComponent },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to login
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);