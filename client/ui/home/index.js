import './home.html'

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.exportList.onCreated(function() {
    this.exports = new ReactiveVar([]);

    this.startExport = function() {
        const exports = this.exports.get();
        const newExport = {
            url: '',
            progress: 0
        };
        exports.push(newExport);
        this.exports.set(exports);

        const intervalId = Meteor.setInterval(() => {
            newExport.progress += 5;
            if (newExport.progress >= 100) {
                Meteor.clearInterval(intervalId);
                const urls = [
                    'https://www.lempire.com/',
                    'https://www.lemlist.com/',
                    'https://www.lemverse.com/',
                    'https://www.lemstash.com/'
                ];
                newExport.url = urls[Math.floor(Math.random() * urls.length)];
            }
            this.exports.set(exports);
        }, 1000);
    };
});

Template.exportList.helpers({
    exports() {
        return Template.instance().exports.get();
    }
});

Template.exportList.events({
    'click #startExport'(event, instance) {
        instance.startExport();
    }
});