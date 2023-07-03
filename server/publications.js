import { Export } from '../both/collections';

Meteor.publish('exports', function() {
    return Export.find({ ownerId: Meteor.userId()}, { pollingIntervalMs: 1000});
});