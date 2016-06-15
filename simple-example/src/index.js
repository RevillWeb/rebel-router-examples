//The router
import {RebelRouter} from '../../node_modules/rebel-router/src/rebel-router.js';
//Our pages
import {HomePage} from './pages/home.js';
import {AboutPage} from './pages/about.js';
import {ContactPage} from './pages/contact.js';

const routes = {
    "/about": AboutPage,
    "/contact": ContactPage,
    "default": HomePage
};

RebelRouter.create("main", routes);



