import { Injectable } from '@angular/core';
import { device } from 'tns-core-modules/platform/platform';

@Injectable()
export class TranslateService {

    private defaultLang;

    constructor() {
        this.defaultLang = 'en';
    }

    /**
     * Set the default lang
     *
     * @param {string} lang
     * @memberof TranslateService
     */
    setDefaultLang(lang: string) {
        this.defaultLang = lang;
    }

    /**
     * Get a resource
     *
     * @param {string} key
     * @returns {*}
     * @memberof TranslateService
     */
    get(key: string): any {
        return this.getResources()[key];
    }

    /**
     * Get the resources
     *
     * @private
     * @returns {*}
     * @memberof TranslateService
     */
    private getResources(): any{
        const localLang = device.language.split('-')[0];
        let rsc = this.getResourcesJSFile(localLang);

        if (!rsc) {
            rsc = this.getResourcesJSFile(this.defaultLang);
        }

        if (!rsc) {
            return null;
        }

        return rsc;
    }

    /**
     * Get javascript module for resources
     *
     * @private
     * @param {string} lang
     * @returns {*}
     * @memberof TranslateService
     */
    private getResourcesJSFile(lang: string): any {
        let rsc;
        try {
            rsc = require(this.getResourcesPath(lang)).default;
        } catch (err) {
            rsc = null;
        }

        return rsc;
    }

    /**
     * Get the path to the resources
     *
     * @private
     * @param {string} lang
     * @returns {string}
     * @memberof TranslateService
     */
    private getResourcesPath(lang: string): string {
        return '../i18n/' + lang;
    }
}
