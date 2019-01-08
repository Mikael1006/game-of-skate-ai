import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { FirstPlayerComponent } from './components/first-player/first-player.component';
import { GameComponent } from './game.component';
import { MatchComponent } from './pages/match/match.component';

const routes: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            {
                path: 'match',
                component: MatchComponent,
                children: [
                    { path: '', redirectTo: 'first-player', pathMatch: 'full' },
                    { path: 'first-player', component: FirstPlayerComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GameRoutingModule { }
