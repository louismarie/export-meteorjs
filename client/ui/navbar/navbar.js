import './navbar.html';

Template.navbar.events({
    'click .js-open-login-modal'() {
        Modal.show('login_modal');
    },
    'click .js-logout'() {
        Meteor.logout();
    },
});

Template.login_modal.onCreated(function() {
    this.autorun(() => {
        if(Meteor.userId()){
            Modal.hide('login_modal');
        }
    });
});