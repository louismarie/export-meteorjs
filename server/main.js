import { Meteor } from 'meteor/meteor';
import '../both/methods';
import './publications'
import { Export } from '../both';
import { startExport } from './jobs';

Meteor.users.deny({
    update() { return true; }
});

export const isExportModule = () => !!Meteor.settings.public.isExportModule;

Meteor.startup(() => {
    if (isExportModule()) {
        console.warn('** Running export module **');
        Export.after.insert(function (userId, doc) {
            console.warn('** Starting export **');
            startExport(doc)
        });
    } else {
        console.warn('** Running www module **');
    }
});