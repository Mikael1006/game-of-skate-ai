import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home/welcome', pathMatch: 'full' },
    { path: 'home', loadChildren: '~/app/features/home/home.module#HomeModule' },
    { path: 'game', loadChildren: '~/app/features/game/game.module#GameModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(
        routes,
        // { enableTracing: true }
    )],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
