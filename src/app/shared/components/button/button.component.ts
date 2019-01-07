import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'tns-core-modules/ui/button';
import { EventData } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'AppButton',
    moduleId: module.id,
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input()
    label: string;

    @Output()
    click: EventEmitter<EventData>;

    constructor() {
        this.click = new EventEmitter<EventData>();
    }

    ngOnInit(): void {}

    /**
     * On button click
     *
     * @param {EventData} event
     * @memberof AppButton
     */
    onTap(event: EventData) {
        this.click.emit(event);
    }
}
