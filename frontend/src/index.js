import '../src/sass/index.sass';
import 'bootstrap/dist/js/bootstrap';
// require('bootstrap-icons/font/bootstrap-icons.css');
import $ from 'jquery';
import {showRecommendationsInit} from './tools/recommended';
import {signMeOutInit} from './tools/signOutAlert';
import {filter} from './tools/filter'






$(document).ready(function () {

    signMeOutInit();
    // showRecommendationsInit();
    filter();
});






/******************* HMR  **************************/
import index from './templates/index.html';
import products from './templates/products.html';
import login from './templates/login.html';
import contact from './templates/contact.html';
import product_details from './templates/product_details.html';
import about from './templates/about.html';
import account from './templates/account.html';


