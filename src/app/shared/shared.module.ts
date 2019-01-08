import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { ButtonComponent } from './components/button/button.component';
import { PageComponent } from './components/page/page.component';
import { TextFormatPipe } from './pipes/text-format.pipe';

const sharedComponents = [
    ButtonComponent,
    PageComponent
];

const sharedPipes = [
    TextFormatPipe
]

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        sharedComponents,
        sharedPipes
    ],
    exports: [
        NativeScriptUIDataFormModule,
        sharedComponents,
        sharedPipes
    ]
})
export class SharedModule { }
