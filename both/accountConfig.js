T9n.setLanguage('en');

let email = AccountsTemplates.removeField('email');
let password = AccountsTemplates.removeField('password');

if (Meteor.isDevelopment) {
    password.minLength = 3;
}

AccountsTemplates.addField(email);
AccountsTemplates.addField(password);