import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Detail } from './detail/detail';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: Home
    }, 
    {
        path: 'weather/:city',
        title: 'Weather Detail',
        component: Detail
    }
];
