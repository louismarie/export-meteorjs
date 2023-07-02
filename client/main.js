import '../both'
import './ui/layout/layout';
import './startup/router';
import {Export} from "../both/collections";


if (Meteor.isDevelopment) {
    window.Export = Export;
}