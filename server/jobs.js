import { Export } from '../both/collections';

export function startOrContinueExport(myExport) {
    const intervalId = Meteor.setInterval(() => {
        myExport.progress += 5;
        if (myExport.progress >= 100) {
            Meteor.clearInterval(intervalId);
            const urls = [
                'https://www.lempire.com/',
                'https://www.lemlist.com/',
                'https://www.lemverse.com/',
                'https://www.lemstash.com/'
            ];
            myExport.result = urls[Math.floor(Math.random() * urls.length)];
        }
        Export.update(myExport._id, myExport);
    }, 1000);
};