import { Export, ExportUpsertSchema } from './collections.js';

Meteor.methods({
    createExport(myExport) {
        ExportUpsertSchema.validate(myExport);
        name = myExport.name;

        if (!this.userId) {
            throw new Meteor.Error('not-connected');
        }
        return Export.insert({progression : 0, ownerId: this.userId, name})
    },
    updateExport(myExport) {
        Export.update({_id: myExport._id},
            {
                $set:
                {
                    progression: myExport.progression
                }
            });
    }
})