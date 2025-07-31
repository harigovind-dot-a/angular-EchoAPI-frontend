import { Routes } from '@angular/router';
import { Echo } from './echo/echo';
import { EchoStore } from './echostore/echostore';

export const routes: Routes = [
    {path: 'echo', component: Echo},
    {path: 'echostore', component: EchoStore},
    {path: '', redirectTo: 'echo', pathMatch: 'full'},
];
