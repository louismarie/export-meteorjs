import {check} from "meteor/check";
import SimpleSchema from 'simpl-schema';

export const Export = new Mongo.Collection('export');

Export.before.insert(function (userId, doc) {
    doc.ownerId = Meteor.userId();
    doc.createdAt = Date.now();
});

export const ExportUpsertSchema = new SimpleSchema({
    name: {
        type: String,
        min: 3,
        max: 50
    }
}, { check });