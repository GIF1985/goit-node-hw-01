const contacts = require("./contacts.js");
const { argv } = require("yargs");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts().then(console.table);
      break;

    case "get":
      contacts.getContactById(id).then(console.log);
      break;

    case "add":
      contacts.addContact(name, email, phone).then(console.log);
      break;

    case "remove":
      contacts.removeContact(id).then(console.log);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
