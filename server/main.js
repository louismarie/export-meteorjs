import { Meteor } from 'meteor/meteor';
import '../both/methods';
import './publications'
import { Export } from '../both';
import { startOrContinueExport } from './jobs';

Meteor.users.deny({
    update() { return true; }
});

export const isExportModule = () => !!Meteor.settings.public.isExportModule;

Meteor.startup(() => {
    if (isExportModule()) {
        console.warn('** Running export module **');

        Export.find().observe({
            added: function(myExport) {
                if (myExport.progress !== 100) {
                    startOrContinueExport(myExport)
                }
        }});


    } else {
        console.warn('** Running www module **');
    }
});