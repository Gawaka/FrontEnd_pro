
const phoneBook = {
    contacts: [
        {
            name: 'John',
            phone: 123123123,
            email: 'john@gmail.com'
        },
        {
            name: 'Ann',
            phone: 312312312,
            email: 'ann@gmail.com'
        },
        {
            name: 'Alex',
            phone: 231231231,
            email: 'alex@gmail.com'
        }
    ],

    getContactByName: function (nameToFind) {
        for (const contact of phoneBook.contacts) {
            if (nameToFind === contact.name) {
                console.log(nameToFind);
            }
        }
    },

    addContact: function(name, phone, email) {
        const newContact = {
            name: name,
            phone: phone,
            email: email
        };

        phoneBook.contacts.push(newContact);
    }
};

phoneBook.getContactByName('John');
phoneBook.getContactByName('Ann');
phoneBook.getContactByName('Alex');

phoneBook.addContact('Vladimir', 431431431, 'vladimir@gmail.com');

console.log(phoneBook);