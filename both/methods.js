import { Export, ExportUpsertSchema } from './collections.js';

Meteor.methods({
    createExport(myExport) {
        ExportUpsertSchema.validate(myExport);
        name = myExport.name;

        if (!this.userId) {
            throw new Meteor.Error('not-connected');
        }
        return Export.insert({progress : 0, name})
    },
})