import { Meteor } from 'meteor/meteor';
import '../both/methods.js';

Meteor.users.deny({
    update() { return true; }
});