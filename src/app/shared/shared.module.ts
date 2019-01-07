import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { ButtonComponent } from './components/button/button.component';
import { PageComponent } from './components/page/page.component';

const sharedComponents = [
    ButtonComponent,
    PageComponent
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        sharedComponents
    ],
    exports: [
        NativeScriptUIDataFormModule,
        sharedComponents
    ]
})
export class SharedModule { }
