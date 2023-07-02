import './exportList.html'
import { Export } from '../../../both/collections'

Template.exportList.events({
    'submit .js-create-export'(event, instance) {
        event.preventDefault();

        const name = event.target.name.value;

        Meteor.call('createExport', {name}, function(err, exportId) {
            if(!err) {
                event.target.name.value = '';
            }
        });
    }
});

Template.exportList.onCreated(function() {
    this.subscribe('exports');
});

Template.exportList.helpers({
    exports() {
        return Export.find({}, { sort: { createdAt: -1 }}).fetch();
    }
});