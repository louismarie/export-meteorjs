Meteor.publish('exports', function() {
    return Exports.find({ ownerId: this.userId });
});