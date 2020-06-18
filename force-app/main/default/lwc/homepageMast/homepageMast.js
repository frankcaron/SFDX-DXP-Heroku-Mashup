
//CSS
import bootstrap from '@salesforce/resourceUrl/bootstrap';
import css from '@salesforce/resourceUrl/css';
import grayscale from '@salesforce/resourceUrl/grayscale';
import fontawesome from '@salesforce/resourceUrl/fontawesome';

//JS
import bootstrapjs from '@salesforce/resourceUrl/bootstrapjs';
import grayscalejs from '@salesforce/resourceUrl/grayscalejs';
import jquery from '@salesforce/resourceUrl/jquery';
import jqueryeasing from '@salesforce/resourceUrl/jqueryeasing';

//Core
import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class HomepageMast extends LightningElement {

    //Apply CSS
    constructor() {
        super();
        Promise.all([
            loadStyle(this, bootstrap),
            loadStyle(this, css),
            loadStyle(this, grayscale),
            loadStyle(this, fontawesome),
            loadScript(this, jquery),
            loadScript(this, jqueryeasing),
            loadScript(this, bootstrapjs),
            loadScript(this, grayscalejs),
        ]);
    }

}