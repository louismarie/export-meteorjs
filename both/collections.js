import {check} from "meteor/check";
import SimpleSchema from 'simpl-schema';

export const Export = new Mongo.Collection('export');

export const ExportUpsertSchema = new SimpleSchema({
    progression: Number,
    result: {
        type: String,
        optional: true
    }
}, { check });