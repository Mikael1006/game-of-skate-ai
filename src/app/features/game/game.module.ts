import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from '~/app/shared/shared.module';
import { FirstPlayerComponent } from './components/first-player/first-player.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { MatchComponent } from './pages/match/match.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GameRoutingModule,
        SharedModule
    ],
    declarations: [
        GameComponent,
        MatchComponent,
        FirstPlayerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GameModule { }
