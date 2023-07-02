import { Meteor } from 'meteor/meteor';
import '../both/methods';
import './publications'

Meteor.users.deny({
    update() { return true; }
});